
const	VOID_TAGS			= 'img,br,hr,input,area,col,command,embed,keygen,link,meta,param,source,track,wbr,base,circle,path,!doctype'.split(','),
		BLACKLIST			= 'title,script,input,textarea,button,link,meta,base,style,frame,noscript,canvas'.split(','),
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
			// if display = none
			if(/^\s*none\s*$/i.test(attrs.style.display))
				this[REMOVE_TAG_BODY] = true;
			// if is not a lowLevelTag and contains no attribute
			else if(
				Object.keys(attrs).length === 0
				&& lowLevelTags.indexOf(this.tagName) === -1
			){
				this[REMOVE_TAG_SYMB] = true;
			}
		}
	},
	cleanStyle : cleanStyle,
	get html(){
		var html;
		if(this[REMOVE_TAG_BODY] === true || this[REMOVE_TAG_SYMB] === true){
			html	= '';
		}else{
			var attrs	= this.attributes;
			var attrKies= Object.keys(attrs);
			var str;
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
					result += ' ' + text + ' ';
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