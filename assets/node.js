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