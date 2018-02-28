/**
 * pluging for brighter
 */
if(typeof BrighterJS === 'undefined'){
	alert('COREDIGIX-XSS>> please install BRIGHTER First: brighterjs.com');
	throw new Error('Brighter not found.');
}

// he
//=include ../node_modules/he/he.js

;(function($$){
	'use strict';
	// HTML seeker
	//=include params.js
	//=include html-seeker.js
	//=include html-attributes-seeker.js
	//=include html-cleaner.js
	//=include style-parser.js
	//=include style-cleaner.js

	$$.rootPlugin({
		xss	: {
			value: {
				clean	: htmlClean,
				escape	: html => he.escape(html),
				encode	: html => he.encode(html),
				unescape: html => he.decode(html),
				decode	: html => he.decode(html),

				get voidTags(){return VOID_TAGS},
				get blackList(){return BLACKLIST},
				get whiteAttributes(){return WHITE_ATTRIBUTES},
				get whiteStyle(){return WHITE_STYLES}
			}
		}
	});
})(BrighterJS);