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
//=include params.js


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
//=include html-seeker.js
//=include html-attributes-seeker.js
//=include html-cleaner.js
//=include style-parser.js
//=include style-cleaner.js

