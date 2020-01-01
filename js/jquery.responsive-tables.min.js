/*
 * Responsive Tables plugin 2.2.1
 * Ryan Wells
 * Copyright 2019, Ryan Wells (https://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
$.extend({responsiveTables:function(t){t=t||"800px",$("table").length>0&&$("table").each(function(e){var n="jrt-instance-"+ ++e,a=$(this);a.addClass("jrt"),a.addClass(n);var s='<style type="text/css">\n';s+="@media only screen and (max-width:"+t+")  {\n",a.find("thead").length>0&&a.find("thead th").each(function(t){var e=$(this).text().replace(/\s+/g," ");s+="\t."+n+">tbody>tr>td.jrt-cell-"+ ++t+':before { content: "'+e+'"; }\n'}),a.find("tbody > tr").each(function(t){var e=$(this);var n=[],a=[];e.find("td").each(function(t,e,s){var d=$(this);t++,a>0&&(a[0],t++),n>0&&(s=t+n.shift()-1,a.splice(0,1),a.push(s),t=s),d.is("[colspan]")&&(e=parseInt($(this).prop("colspan"),10),n.push(e)),d.addClass("jrt-cell-"+t)})}),a.find("thead").length>0&&(s+="}\n",s+="</style>",a.before(s))})}});