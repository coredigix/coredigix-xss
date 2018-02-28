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