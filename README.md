## jquery.responsive-tables

A lightweight jQuery plugin that enables HTML table markup to become responsive. It provides a clean list view via devices with small screens, then returns to the traditional view for larger screens. It can work for multiple tables on a single page, as well as with tables that contain various combinations of merged cells. It uses CSS for the rendering and is easily customized. 

#### <a href="http://ryanwells.com/examples/responsive-tables/" target="_blank">Demo</a>

### How to use

1. include the <em>responsive-tables.css</em> in your page within the &lt;head&gt;&lt;/head&gt; tags.
2. Include the <em>jquery.responsive-tables.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a>.
3. Invoke the plugin within your custom scripts file: 
```javascript
$(document).ready(function() {
    $.responsiveTables();    
});    
```
4. Ensure that tables are marked up using the &lt;thead&gt;&lt;/thead&gt; and &lt;tbody&gt;&lt;/tbody&gt; tags.
5. Add the class 'respond' to the &lt;table&gt; tag of the chosen table(s):
```html
<table class="respond">
    <caption>Example</caption>
    <thead>
        ...
```
### Customizations 

Within the <em>responsive-tables.css</em> style sheet, modifying the values of the 'top' and 'left' properties will change the perceived table heading padding at the &quot;mobile&quot; view. This will enable consitancy between the table heading and table data padding:
```css
table.respond td:before { 
    /* top/left values mimics padding */
    top: 8px;/* mimics padding top */
    left: 6px;/* mimics padding left */
```

Within the <em>responsive-tables.css</em> style sheet, change the media query breakpoint as needed:
```css
@media only screen and (max-width: 768px) 
```
When changing the media query breakpoint within the <em>responsive-tables.css</em> style sheet, as described above, ensure that a matching value is passed from the plugin invocation: 
```javascript
$.responsiveTables('768px');    
```

### Author

Ryan Wells: [ryanwells.com][twitter]

### License

Licensed under [MIT][mit]. Enjoy.

[twitter]: http://ryanwells.com
[mit]: http://www.opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
