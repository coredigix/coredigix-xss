/**
 * init style attribute
 */
function initStyle(){console.log('---- init style')
	var result	= {};
	var style	= this[STYLE_ATTR_SYMB];
	if(style){
		// remove comments
		style = style.replace(/\/\*[\s\S]*?\*\//, '');
		console.log('---', style)
		styleParser(style, (n, v) => result[n] = v);
	}
	console.log('>>stl>>', result)
	// add to attribute
	this.style	= result;
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