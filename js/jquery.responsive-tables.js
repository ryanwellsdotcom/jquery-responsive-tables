/*
 * Responsive Tables plugin 1.0
 * Ryan Wells 
 * Copyright 2015, Ryan Wells (http://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
    $.extend({
        responsiveTables: function() {
		 // responsive tables
		   if ($('.respond').not('responded').length > 0) {
				$('.respond').not('responded').each( function (c) { // loop through each table that has .respond class
					c++; // start array at 1 for css instead of 0
					var className = 'instance-' + c; // add unique class name to each table with .respond class
					var $this = $(this); // query the DOM only once
					$this.addClass(className); // add the unique classes
					$this.addClass('responded'); // add the unique classes
					var respondHtml = '<style type="text/css">\n'; // write out scoped styles (ok in HTML5)
					respondHtml += '@media only screen and (max-width: 800px)  {\n'; // change the width accordingly
						$this.find('thead th').each( function (i) { // loop through th tags 
							var $text = $(this).text(); // get table heading text from each th
							i++; // start array at 1 for css instead of 0
							// these will become the vertical table headers when collapsed for tablet and mobile
							respondHtml += '\t.'+className+'>tbody>tr>td:not([colspan]):nth-of-type('+i+'):before { content: "'+$text+'"; }\n';
							respondHtml += '\t.'+className+'>tbody>tr>td:not([colspan]).col-'+i+':before { content: "'+$text+'"; }\n'; // applied to td tags on the row that has a colspan
						});
						$this.find('td[colspan]').each( function (i) { // loop through each cell with colspan
							var index = 1; // one based index for css
							$(this).parent().find('td').each(function() { // loop through each td	
								var $td = $(this),
									colspan = parseInt($td.attr('colspan'), 10);
								
								$td.addClass('col-' + index); // add incremented class name to target cells
								if (!isNaN(colspan)) { // has colspan
									index += colspan; // increment index by colspan number
								} else {
									index++; // no colspan
								}
							});
						});
					respondHtml += '}\n'; // close media query 
					respondHtml += '</style>'; // end style
					$this.before(respondHtml); // insert styles above each corresponding table
				});
			}		
        }
    });
}(jQuery));