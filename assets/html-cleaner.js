
const	VOID_TAGS			= 'img,br,hr,input,area,col,command,embed,keygen,link,meta,param,source,track,wbr,base'.split(','),
		BLACKLIST			= 'script,input,link,meta,base,style,frame,noscript,canvas'.split(','),
		RM_TAG_ONLY			= 'html,head,body,doctype,iframe'.split(','),
		WHITE_ATTRIBUTES	= {
			'*'		: ['style'],	// all tags
			'img'	: ['src', 'srcset', 'width', 'height'],
			'a'		: ['href', 'hreflang', 'target', 'download'],
			'font'	: ['color', 'face', 'size']
		},
		WHITE_STYLES	= {
			'*'	: /^(?:background|border|box|break|clear|color|display|font|height|letter|lighting|list-style|margin|max-height|max-width|min-height|min-width|padding|text|width|word)/i
		},
		lowLevelTags	= 'a,b,u,i,var,font,abbr,address,bdi,br,canvas,caption,center,cite,code,em,hr,label,legend,mark,strong,sub,sup,'.split(','),

		JS_ATTR_CHECK	= /\bjavascript\s*\:/i,

		REMOVE_TAG_SYMB	= Symbol(),
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
		var attrs	= {
			style	: initStyle
		};
		htmlAttrSeeker(this.body, (attrName, attrValue) => {
			if(attrName === 'style')
				attrs[STYLE_ATTR_SYMB]	= attrValue;
			else
				attrs[attrName]	= attrValue;
		} );
		Object.defineProperty(this, 'attributes', {
			value	: attrs,
			writable: true
		});
		return attrs;
	},
	clean	: function(){
		// SVG Tag
		if(this.svg === true){}
		// HTML Tag
		else {
			var attrs		= this.attributes;

			var whiteList	= this[OPTIONS_SYMB].acceptedAttr || WHITE_ATTRIBUTES;
			whiteList		= whiteList[this.tagName] || whiteList['*'];
			Object.keys(attrs).forEach(attrName => {
				if(whiteList.indexOf(attrName) !== -1){
					if(attrName === 'style')
						this.cleanStyle();
					else if(JS_ATTR_CHECK.test(attrs[attrName]))
						delete attrs[attrName];
				}
				else delete attrs[attrName];
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
		var closeTag	= this.tagNameOrigine.endsWith('/>') ? '/>' : '>';
		if(attrKies.length === 0)
			html	= lowLevelTags.indexOf(this.tagName) === -1 ? '' : '<' + this.tagName + closeTag;
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
			else if(lowLevelTags.indexOf(this.tagName) !== -1)
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
 * @param  {function} options.onTag		= true 		if include style attribute
 * @param  {function} options.acceptedAttr 			accepted attributes for each tag
 * @param  {function} options.acceptedStyle 		accepted style attributes for each tag
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
	var rmTagBody	= false;
	HTMLSeeker(
		html,
		// onTag
		(tagNameOrigine, tagName, tagBody, tagContent) => {
			// flags
			isEndTag	= tagNameOrigine.startsWith('/');
			if(isEndTag){
				tagName		= tagName.substr(0);
				// get the correct opening tag
				do{
					tagWrapper	= stack.pop();
					if(!tagWrapper || tagWrapper.tagName === tagName) break;

					errors.push({tag: tagName, msg: 'incorrect closing tag'});
					if(rmTagBody === false){
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
				} while(true);
				if(tagWrapper){
					if(tagWrapper === rmTagBody) { // remove this tagBody and content
						rmTagBody = false;
					}
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
				if(stack.length > 0)
					Object.defineProperty(tagWrapper, 'parentNode', {value: stack[stack.length - 1]});
				// if it SVG or SVG element
				if(tagName === 'svg' || tagWrapper.parentNode && tagWrapper.parentNode.svg === true)
					tagWrapper.svg = true;
				// other properties
				Object.defineProperties(tagWrapper, {
					tagName			: {value : tagName},
					tagNameOrigine	: {value : tagNameOrigine},
					body			: {value : tagBody},
					isEndTag		: {value : isEndTag},
					isVoidTag		: {value : isVoidTag},
					isBlackList		: {value : isBlackList}
				});
				if(tagContent)
					Object.defineProperty(tagWrapper, 'content', {value: tagContent});
				Object.setPrototypeOf(tagWrapper, TAG_HELPER);
				// get user response
				if(rmTagBody === false){
					cbResponse	= options.onTag && options.onTag(tagWrapper);
					if(cbResponse === true) // keep the tag as it is
						response += tagWrapper.html;
					else if(cbResponse === false) // remove this tag (not the whole body)
						tagWrapper[REMOVE_TAG_SYMB]	= true;
					else if(typeof cbResponse === 'string'){ // replace all tag and tagBody with this text (empty text to remove it)
						response += cbResponse;
						rmTagBody	= tagWrapper;
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
							rmTagBody	= tagWrapper;
						// remove tag only
						else if(RM_TAG_ONLY.indexOf(tagName) !== -1)
							tagWrapper[REMOVE_TAG_SYMB]	= true;
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
			if(rmTagBody === false)
				result += text;
		}
	);
	return result;
}