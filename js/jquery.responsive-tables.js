/*
 * Responsive Tables plugin 2.2.1
 * Ryan Wells
 * Copyright 2019, Ryan Wells (https://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
$.extend({
    responsiveTables: function(breakpoint) {
        breakpoint = breakpoint || '800px';
        if ($('table').length > 0) {
            $('table').each(function(i) {
                i++;
                var className = 'jrt-instance-' + i;
                var $this = $(this);
                $this.addClass('jrt');
                $this.addClass(className);
                var respondHtml = '<style type="text/css">\n';
                respondHtml +=
                    '@media only screen and (max-width:' +
                    breakpoint +
                    ')  {\n';
                if ($this.find('thead').length > 0) {
                    $this.find('thead th').each(function(i) {
                        var $tdText = $(this)
                            .text()
                            .replace(/\s+/g, ' ');
                        i++;
                        respondHtml +=
                            '\t.' +
                            className +
                            '>tbody>tr>td.jrt-cell-' +
                            i +
                            ':before { content: "' +
                            $tdText +
                            '"; }\n';
                    });
                }
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
                            m = i + arrColspan.shift() - 1;
                            modIndex.splice(0, 1);
                            modIndex.push(m);
                            i = m;
                        }
                        if ($this.is('[colspan]')) {
                            c = parseInt($(this).prop('colspan'), 10);
                            arrColspan.push(c);
                        }
                        $this.addClass('jrt-cell-' + i);
                    });
                });
                if ($this.find('thead').length > 0) {
                    respondHtml += '}\n';
                    respondHtml += '</style>';
                    $this.before(respondHtml);
                }
            });
        }
    }
});
