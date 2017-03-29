/*
 * Responsive Tables plugin 2.0.0
 * Ryan Wells 
 * Copyright 2017, Ryan Wells (http://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
$.extend({responsiveTables:function(a){a=a||"800px",$("table").length>0&&$("table").each(function(b){b++;var c="jrt-instance-"+b,d=$(this);d.addClass("jrt"),d.addClass(c);var e='<style type="text/css">\n';e+="@media only screen and (max-width:"+a+")  {\n";var f=[];d.find("thead th").each(function(a,b){b=$(this).text(),a++,f.push(b),e+="\t."+c+">tbody>tr>td.jrt-cell-"+a+':before { content: "'+b+'"; }\n'}),d.find("tbody > tr").each(function(a){var b=$(this);a++;var c=[],d=[];b.find("td").each(function(a,b,e){var f=$(this);a++,d>0&&(d[0],a++),c>0&&(e=a+c.shift()-1,d.splice(0,1),d.push(e),a=e),f.is("[colspan]")&&(b=parseInt($(this).prop("colspan"),10),c.push(b)),f.addClass("jrt-cell-"+a)})}),e+="}\n",e+="</style>",d.before(e)})}});