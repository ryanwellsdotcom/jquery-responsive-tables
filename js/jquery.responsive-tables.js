/*
 * Responsive Tables plugin 1.1
 * Ryan Wells 
 * Copyright 2015, Ryan Wells (http://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.extend({
        responsiveTables: function(breakpoint) {
        	breakpoint = breakpoint || '800px';
            if ($('.respond').not('responded').length > 0) {
                $('.respond').not('responded').each(function(i) { 
                    i++;
                    var className = 'rt-instance-' + i; 
                    var $this = $(this); 
                    $this.addClass(className); 
                    $this.addClass('responded'); 
                    var respondHtml = '<style type="text/css">\n'; 
                    respondHtml += '@media only screen and (max-width:'+breakpoint+')  {\n';
                    var arrHeaderText = [];
                    $this.find('thead th').each(function(i, $text) { 
                        $text = $(this).text(); 
                        i++; 
                        arrHeaderText.push($text); 
                        respondHtml += '\t.' + className + '>tbody>tr>td.rt-cell-' + i + ':before { content: "' + $text + '"; }\n';  
                    });                    
                    $this.find('tbody > tr').each(function(i) {
                        var $this = $(this); 
                        i++;
                        var arrColspan = [];
                        var modIndex = [];
                        $this.find('td').each(function(i, c, m) {
                            var $this = $(this);                            
                            i++;
                            if (modIndex > 0) {
                                modIndex[0];
                                i++;
                            }
                            if (arrColspan > 0) {
                                m = (i + arrColspan.shift() - 1);
                                modIndex.splice(0,1);
                                modIndex.push(m);
                                i = m;
                            }                          
                            if ($this.is('[colspan]')) {                
                                c = parseInt($(this).prop('colspan'), 10);
                                arrColspan.push(c);                                
                            }
                            $this.addClass('rt-cell-' + i);
                        });                        
                    });
                    respondHtml += '}\n'; 
                    respondHtml += '</style>'; 
                    $this.before(respondHtml); 
                }); 
            }
        }
    });
}(jQuery));