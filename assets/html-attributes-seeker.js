
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