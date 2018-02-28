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
	get blackList(){return BLACKLIST}
};

// extra
//= inculde extra.js

// HTML seeker
//=include html-seeker.js

