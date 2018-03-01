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

// params
const	whitespace		= /[\x20\t\r\n\f]/;


module.exports	= {
	clean	: htmlClean,
	escape	: html => he.escape(html),
	encode	: html => he.encode(html),
	unescape: html => he.decode(html),
	decode	: html => he.decode(html),

	// cleanStyle	 : cssXss.cleanStyle,

	get voidTags(){return VOID_TAGS},
	get blackList(){return BLACKLIST},
	get whiteAttributes(){return WHITE_ATTRIBUTES},
	get whiteStyle(){return WHITE_STYLES}
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
		scriptStyleLen,
		tagName,
		tagNameLC;

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
			tagName		= str.match(/^<([\/!]?[\w-]*)/);
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


function htmlAttrSeeker(tagBody, cb){
	var pos			= tagBody.match(/\s/), // find the first blank space
		lastPos		= 0;
	var char;
	var quote		= false;
	var attrName	= false;
	var state		= 0; // 0 [attrName: 1] 2 = 3 [attrValue: 4]
	var errors		= [];
	var _add	= (() => {
		if(state === 4){
			cb(attrName, he.decode(tagBody.substring(lastPos, pos)));
			attrName	= false;
			state		= 0;
		} else if(state === 2){ // attribute without a value, default value to true
			cb(attrName, true);
			attrName	= false;
			state		= 0;
		} else if(state === 1) {
			attrName	= tagBody.substring(lastPos, pos).toLowerCase();
			state = 2;
		}
	});
	if(pos){
		for(var len=tagBody.length, pos = pos.index + 1; pos < len; ++pos){
			char	= tagBody.charAt(pos);
			//escape next char
			if(char == '\\') ++pos;
			// quote
			else if(quote !== false){
				// end quote
				if(quote === char){
					quote = false;
					_add();
				}
			}
			else if(char === '"' || char === "'"){
				quote	= char;
				lastPos = pos + 1;
				++state; // 0 to 1 or 3 to 4
			}
			// equal
			else if(char === '='){
				if(state === 0) // error, just ignore it
					errors.push('incurrect "=" at col:' + pos);
				else if(state === 1){
					_add();
					state = 3;
				}
				else if(state === 2)
					state = 3;
			}
			// white space
			else if(
				whitespace.test(char)
				|| char === '>'
				|| char === '/'
			)
				_add();
			// word char
			else if(state === 1 || state === 4){} // attr or value
			else{
				lastPos = pos;
				if(state === 2)
					_add();
				if(state === 3) state = 4;
				else state = 1;
			}
		}
		// the last attr
		if(attrName !== false)
			_add();
	}
	return errors;
}

const	VOID_TAGS			= 'img,br,hr,input,area,col,command,embed,keygen,link,meta,param,source,track,wbr,base,circle,path'.split(','),
		BLACKLIST			= 'title,script,input,link,meta,base,style,frame,noscript,canvas'.split(','),
		RM_TAG_ONLY			= 'html,head,body,!doctype,iframe'.split(','),
		WHITE_ATTRIBUTES	= {
			'*'		: ['style'],	// all tags
			'img'	: ['style', 'src', 'srcset', 'width', 'height'],
			'a'		: ['style', 'href', 'hreflang', 'target', 'download'],
			'font'	: ['style', 'color', 'face', 'size']
		},
		WHITE_STYLES	= {
			'*'	: /^(?:background|border|box|break|clear|color|display|font|height|letter|lighting|list-style|margin|max-height|max-width|min-height|min-width|padding|text|width|word)/i
		},
		lowLevelTags	= 'a,b,u,i,var,font,abbr,address,bdi,br,canvas,caption,center,cite,code,em,hr,label,legend,mark,strong,sub,sup,'.split(','),
		// accept those tags with
		ACCEPT_TAGS		= 'svg'.split(','),

		JS_ATTR_CHECK	= /\bjavascript\s*\:/i,

		REMOVE_TAG_SYMB	= Symbol(),
		REMOVE_TAG_BODY	= Symbol(),
		STYLE_ATTR_SYMB	= Symbol(),
		OPTIONS_SYMB	= Symbol(),

		DEFAULT_OPTIONS = {
			comments	: false,
			/**
			 * style	= false, // do not include style tag
			 * style	= true, // include style tag, do default filter
			 * style	= {
			 * 		@return {undefined} do default filter
			 * 		@return {false} remove this attribute
			 * 		@return {string} set this as the attribute value
			 * 		onAttr	: function(name, value){}
			 *
			 * 		// do aditional modifications on the attributes
			 * 		onEnd	: function(attrs){}
			 * }
			 */
			img			: true, // keep images
		};


const TAG_HELPER = {
	// get tagAttributes
	get attributes(){
		var attrs	= {};
		Object.defineProperty(attrs, 'style', {get: initStyle, configurable : true, enumerable: true});
		htmlAttrSeeker(this.body, (attrName, attrValue) => {
			if(attrName === 'style')
				attrs[STYLE_ATTR_SYMB]	= attrValue;
			else
				attrs[attrName]	= attrValue;
		} );
		Object.defineProperty(this, 'attributes', {
			value	: attrs,
			writable: true,
			enumerable: true
		});
		return attrs;
	},
	clean	: function(){
		var attrs		= this.attributes;
		if(this.svg){
			Object.keys(attrs).forEach(attrName => {
				if(!attrs[attrName] || JS_ATTR_CHECK.test(attrs[attrName]))
					delete attrs[attrName];
			});
		}
		else {
			var whiteList	= this[OPTIONS_SYMB].acceptedAttr || WHITE_ATTRIBUTES;
			whiteList		= whiteList[this.tagName] || whiteList['*'];
			// other attributes
			Object.keys(attrs).forEach(attrName => {
				if(whiteList.indexOf(attrName) !== -1){
					if(attrName === 'style')
						this.cleanStyle();
					else if(JS_ATTR_CHECK.test(attrs[attrName]))
						delete attrs[attrName];
				}
				else{
					delete attrs[attrName];
				}
			});
			// if is not a lowLevelTag and contains no attribute
			if(
				Object.keys(attrs).length === 0
				&& lowLevelTags.indexOf(this.tagName) === -1
			){
				this[REMOVE_TAG_SYMB] = true;
			}
		}
	},
	cleanStyle : cleanStyle,
	get html(){
		var attrs	= this.attributes;
		var attrKies= Object.keys(attrs);
		var str;
		var html;
		var closeTag	= this.body.endsWith('/>') ? ' />' : '>';
		if(attrKies.length === 0)
			html	= this.svg || lowLevelTags.indexOf(this.tagName) !== -1 ? '<' + this.tagName + closeTag : '';
		else {
			html	= '';
			attrKies.forEach(attr => {
				if(attr === 'style'){
					str	= _joinStyle(attrs.style);
					if(str !== '')
						html += ' style="' + he.escape(str) + '"';
				}
				else if(attrs[attr])
					html += ' ' + he.escape(attr) + '="' + he.escape(attrs[attr] + '') + '"';
			});
			if(html !== '')
				html	= '<' + this.tagName + html + closeTag;
			else if(this.svg || lowLevelTags.indexOf(this.tagName) !== -1)
				html	= '<' + this.tagName + closeTag;
		}
		return html;
	}
};

function _joinStyle(style){
	var html	= [];
	for(var i in style)
		html.push(i + ':' + style[i]);
	return html.join(';');
}

/**
 * clean HTML
 * @param  {String} html    				HTML to cleanup
 * @param  {boolean} options.img		= true 		if keep img tag
 * @param  {boolean} options.comments	= false 	if keep HTML comments
 * @param  {boolean} options.keepBlanks	= false		keep blackspaces outside <pre> tag or remove them
 * @param  {function} options.onTag		= true 		if include style attribute
 * @param  {Object} options.acceptedAttr 			accepted attributes for each tag
 * @param  {Object} options.acceptedStyle 		accepted style attributes for each tag
 */
function htmlClean(html, options){
	var stack	= [];
	var result	= '';
	var isEndTag, isVoidTag, tagWrapper, isBlackList;
	var cbResponse;
	var errors	= []; // store parsing errors
	// HTML comment tag
	if(!options) options = DEFAULT_OPTIONS;
	if(options.comments !== true)
		html	= html.replace(/<!--[\s\S]*?-->/g, '');

	// seek HTML
	var parentTag;
	HTMLSeeker(
		html,
		// onTag
		(tagNameOrigine, tagName, tagBody, tagContent) => {
			// flags
			isEndTag	= tagNameOrigine.startsWith('/');
			if(isEndTag){
				tagName		= tagName.substr(1);
				// get the correct opening tag
				do{
					tagWrapper	= stack.pop();
					if(!tagWrapper || tagWrapper.tagName === tagName) break;
					errors.push({tag: tagName, msg: 'incorrect closing tag'});
					// if parent tag is greater then current tag
					if(lowLevelTags.indexOf(tagName) !== -1 && lowLevelTags.indexOf(tagWrapper.tagName) === -1){
						// just ignore it
						stack.push(tagWrapper);
						tagWrapper = null;
						break;
					}
					else if(tagWrapper[REMOVE_TAG_BODY] !== true){
						if(tagWrapper[REMOVE_TAG_SYMB] !== true){
							if(lowLevelTags.indexOf(tagWrapper.tagName) === -1){
								if(lowLevelTags.indexOf(tagName) === -1)
									result += '</' + tagWrapper.tagName + '>';
								else
									errors.push({tag: tagName, msg: 'closing tag removed'});
							}
							else{
								result += '</' + tagWrapper.tagName + '>';
								errors.push({tag: tagWrapper.tagName, msg: 'inclosed tag'});
							}
						}
					}
				} while(true);
				if(tagWrapper){
					if(tagWrapper[REMOVE_TAG_BODY] === true){} // remove this tagBody and content
					else if(tagWrapper[REMOVE_TAG_SYMB] === true){} // remove this tag
					else result += '</' + tagWrapper.tagName + '>';
				}
			}
			else{
				isVoidTag	= !isEndTag && (VOID_TAGS.indexOf(tagName) != -1 || tagBody.endsWith('/>'));
				isBlackList	= BLACKLIST.indexOf(tagName) != -1;
				// tag wrapper
				tagWrapper = {
					[OPTIONS_SYMB]	: options
				};
				// parentNode
				if(stack.length > 0){
					parentTag	= stack[stack.length - 1];
					Object.defineProperty(tagWrapper, 'parentNode', {value: parentTag, enumerable: true});
					if(parentTag[REMOVE_TAG_BODY] === true)
						tagWrapper[REMOVE_TAG_BODY]	= true;
				}
				// if it SVG or SVG element
				if(tagName === 'svg' || tagWrapper.parentNode && tagWrapper.parentNode.svg === true)
					tagWrapper.svg = true;
				// other properties
				Object.defineProperties(tagWrapper, {
					tagName			: {value : tagName},
					tagNameOrigine	: {value : tagNameOrigine},
					body			: {value : tagBody},
					isVoidTag		: {value : isVoidTag},
					isBlackList		: {value : isBlackList}
				});
				if(tagContent)
					Object.defineProperty(tagWrapper, 'content', {value: tagContent, enumerable: true});
				Object.setPrototypeOf(tagWrapper, TAG_HELPER);
				// get user response
				if(tagWrapper[REMOVE_TAG_BODY] !== true){
					cbResponse	= options.onTag && options.onTag(tagWrapper);
					if(cbResponse === true) // keep the tag as it is
						response += tagWrapper.html;
					else if(cbResponse === false) // remove this tag (not the whole body)
						tagWrapper[REMOVE_TAG_SYMB]	= true;
					else if(typeof cbResponse === 'string'){ // replace all tag and tagBody with this text (empty text to remove it)
						response += cbResponse;
						tagWrapper[REMOVE_TAG_BODY] = true;
					}
					else if(typeof cbResponse === 'undefined'){ // default behaviour
						// images
						if(tagName === 'img'){
							if(options.img === true){
								tagWrapper.clean();
								result += tagWrapper.html;
							}
						}
						// blacklisted
						else if(isBlackList)
							tagWrapper[REMOVE_TAG_BODY] = true;
						// remove tag only
						else if(RM_TAG_ONLY.indexOf(tagName) !== -1){
							tagWrapper[REMOVE_TAG_SYMB]	= true;
						}
						// other tags
						else {
							tagWrapper.clean();
							cbResponse	= tagWrapper.html;
							if(cbResponse === '')
								tagWrapper[REMOVE_TAG_SYMB]	= true;
							else
								result += cbResponse;
						}
					}
					else throw new Error('uncorrect cb response');
				}
				// add tag to stack
				if(isVoidTag === false)
					stack.push(tagWrapper);
			}
		},
		// onText
		text => {
			if(
				stack.length === 0
				|| stack[stack.length - 1][REMOVE_TAG_BODY] !== true
			){
				if(options.keepBlanks !== true)
					text = text.replace(/\s{2,}/g, "\n").trim();
				if(text !== '')
					result += ' ' + text;
			}
		}
	);
	// close openning tags
	do{
		tagWrapper	= stack.pop();
		if(!tagWrapper) break;

		if(tagWrapper[REMOVE_TAG_BODY] !== true && tagWrapper[REMOVE_TAG_SYMB] !== true){
			errors.push({tag: tagWrapper.tagName, msg: 'not closed tag, closing it'});
			result += '</' + tagWrapper.tagName + '>';
		}
	} while(true);
	return result;
}
/**
 * init style attribute
 */
function initStyle(){
	var result	= {};
	var style	= this[STYLE_ATTR_SYMB];
	if(style){
		// remove comments
		style = style.replace(/\/\*[\s\S]*?\*\//, '');
		styleParser(style, (n, v) => result[n] = v);
	}
	// add to attribute
	Object.defineProperty(this, 'style', {value: result, configurable: true, enumerable: true});
	return result;
}

/** style parser */
function styleParser(str, cb){
	var char, quote= false; // var quote = false
	var attName	= false;
	var lastPos = 0;
	// 
	var _add = (() => {
		if(attName !== false){
			cb(attName, str.substring(lastPos, pos).trim());
			attName = false;
		}
	});
	// 
	for(var len = str.length, pos=0; pos < len; ++pos){// if(quote)
		char	=  str.charAt(pos);
		if(char === '\\') ++pos; //escape next character
		else if(quote !== false){
			if(char === quote)
				quote	= false;
		}
		else if(char === ':'){
			attName	= str.substring(lastPos, pos).trim();
			lastPos	= pos + 1;
		}
		else if(char === ';'){
			_add();
			lastPos = pos + 1;
		}
		else if(char === '"' || char === "'")
			quote	= char;
	}
	_add();
}
/**
 * clean style
 */
const	CSS_JS_REGEX	= /javascript\s*:|^expression/i;

function cleanStyle(){
	var style 		= this.attributes.style;
	var whiteList	= this[OPTIONS_SYMB].acceptedStyle || WHITE_STYLES;
	whiteList		= whiteList[this.tagName] || whiteList['*'];
	for(var attr in style){
		if(
			!whiteList.test(attr) // not in the white list
			|| CSS_JS_REGEX.test(style[attr])
		)
			delete style[attr];
	}
}

