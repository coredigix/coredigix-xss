/**
 * @author coredigix.com
 * @description remove unwanted HTML
 *
 * xss.clean(HTML, options)
 * xss.cleanStyle(css, options)
 * xss.cleanCSS(css, options)
 *
 * xss.escape(html)				// escape this html code
 * xss.unescape(html)			// unescape this html code
 * xss.encode(html)				// encode this html code
 * xss.decode(html)				// decode this html code (alias to unescape)
 */

'use strict';

const he	= require('he');


module.exports	= {
	clean,
	escape	: html => he.escape(html),
	encode	: html => he.encode(html),
	unescape: html => he.decode(html),
	decode	: html => he.decode(html),

	// cleanStyle	 : cssXss.cleanStyle,

	get voidTags(){return VOID_TAGS},
	get blackList(){return BLACKLIST}
};



// HTML seeker
/**
 * HTML tag seeker
 * @param {function} options.onTag emmited when founding a tag, returns: [text | true | false]
 * @param {function} options.onText emitted when founding a text, returns: [text | true | false]
 */

 const scriptStyleTags	= ['script', 'style']; // tags that it's body is interpreted as text

/**
 * seek on HTML content
 * @param {String} html   HTML to parse
 * @param {function} onTag  cb when found a tag
 * @param {function} onText cb when found a text
 */
function HTMLSeeker(html, onTag, onText){
	var len	= html.length;
	var char, str, str2;
	var tagStart	= false,
		scriptStyle	= false,
		attrStart	= false;
	var lastPos	= 0,
		lastPos2= 0,
		lastPos3= false,
		scriptStyleLen;

	for(var pos=0; pos < len; ++pos){
		char	= html.charAt(pos);
		// script style
		if(scriptStyle !== false){
			if(char === '<')
				lastPos3	= pos;
			else if(char === '>' && lastPos3 !== false){
				str2 = html.substring(lastPos3, pos).toLowerCase();
				if(str2.startsWith('</' + scriptStyle)){
					onTag(tagName, tagNameLC, str, html.substring(lastPos, lastPos3))
					lastPos3	= false;
					scriptStyle	= false;
					lastPos 	= pos + 1;
					tagStart	= false;
				}
			}
		}
		// outside tag
		else if(tagStart ===  false){
			if(char === '<'){
				onText(html.substring(lastPos, pos));
				tagStart	= pos;
				lastPos		= pos;
			}
		}
		// inside tag
		// inside quote
		else if(attrStart !== false) {
			if(char === '\\')
				++pos;
			else if(attrStart === char)
				attrStart = false;
		}
		// start Quote
		else if(char === '"' || char ===  "'")
			attrStart = char;
		// closing tag
		else if(char === '>'){
			str		= html.substring(lastPos, pos + 1);
			// tag name
			tagName		= str.match(/^<[\/!]?([\w-]*)/);
			if(tagName){
				tagName	= tagName[1];
				tagNameLC	= tagName.toLowerCase();
				// script or style
				if(scriptStyleTags.indexOf(tagNameLC) !== -1){
					scriptStyle		= tagNameLC;
					scriptStyleLen	= scriptStyle.length + 1;
					lastPos2		= lastPos;
				}
				else onTag(tagName, tagNameLC, str);
			} else {
				tagName		= undefined;
				tagNameLC	= undefined;
				onTag(tagName, tagNameLC, str);
			}
			lastPos	= pos + 1;
			tagStart= false;
		}
	}
	// add remaining text
	if(lastPos < len)
		onText(html.substring(lastPos));
}


