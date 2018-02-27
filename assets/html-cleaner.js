


const	VOID_TAGS			= ['img', 'br', 'hr', 'input', 'area', 'col', 'command', 'embed', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'base'],
		BLACKLIST			= ['script', 'input', 'link', 'meta', 'base', 'style', 'frame', 'noscript'],
		RM_TAG_ONLY			= ['html', 'head', 'body', 'doctype', 'iframe'],
		WHITE_ATTRIBUTES	= {
			'*'		: ['style'],	// all tags
			'img'	: ['src', 'data-src', 'width', 'height']
			'a'		: ['href', 'target']
		},
		lowLevelTags	= ['b', 'u', 'i', 'font'],

		JS_ATTR_CHECK	= /\bjavascript\s*\:/i,

		REMOVE_TAG_SYMB	= Symbol(),
		STYLE_ATTR_SYMB	= Symbol();


const TAG_HELPER = {
	// get tagAttributes
	get attributes(){
		var attrs	= {
			style	: styleParser //TODO
		};
		htmlAttrSeeker(this.body, (attrName, attrValue) => {
			if(attrName === 'style')
				attrs[STYLE_ATTR_SYMB]	= parseStyle(attrValue);
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
		var attrs	= this.attributes;
		Object.keys(attrs).forEach(attrName => {
			if(
				(WHITE_ATTRIBUTES[this.tagName] || WHITE_ATTRIBUTES['*'])
					.indexOf(attrName) !== -1
			){
				if(attrName === 'style')
					this.cleanStyle();
				else if(JS_ATTR_CHECK.test(attrs[attrName]))
					delete attrs[attrName];
			}
			else delete attrs[attrName];
		});
	},
	cleanStyle : function(){
		//TODO
	};
	get html(){
		var html	= '<' + this.tagName;
		var attrs	= this.attributes;
		for(var i in attrs){
			if(i === 'style')
				html += ' style="' + he.escape(_joinStyle(attrs.style)) + '"';
			else
				html += ' ' + he.escape(i) + '="' + he.escape(attrs[i] + '') + '"';
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
 * @param  {boolean} options.style		= true 		if keep style attribute
 * @param  {boolean} options.css		= false 	if keep style tag & class attribute
 * @param  {boolean} options.img		= true 		if keep img tag
 * @param  {boolean} options.comments	= false 	if keep HTML comments
 * @param  {function} options.onTag		= true 		if include style attribute
 * @param  {boolean} options.style		= true 		if include style attribute
 */
function htmlClean(html, options){
	var stack	= [];
	var result	= '';
	var isEndTag, isVoidTag, tagWrapper;
	var cbResponse;
	var errors	= []; // store parsing errors
	// HTML comment tag
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
				tagWrapper = {};
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
	)
}