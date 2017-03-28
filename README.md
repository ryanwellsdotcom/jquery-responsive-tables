## jquery-responsive-tables

A lightweight jQuery plugin that enables HTML table markup to become responsive. It provides a clean list view via devices with small screens, then returns to the traditional view for larger screens. It can work for multiple tables on a single page, as well as with tables that contain various combinations of merged cells. It uses CSS for the rendering and is easily customized. 

#### <a href="http://ryanwells.com/examples/responsive-tables/" target="_blank">Demo</a>

### Usage
```
npm install jquery-responsive-tables --save
```
* The plugin requires <a href="http://jquery.com/download/" target="_blank">jQuery</a> 1.11 or above.
* Include the <em>jquery.responsive-tables.js</em> and the <em>responsive-tables.css</em> in your project. The CSS properties can be overridden to meet your needs.
* Invoke the plugin within your custom scripts file: 
```javascript
$(document).ready(function() {
    $.responsiveTables();    
});    
```
* Ensure that tables are marked up semantically using the &lt;thead&gt;&lt;/thead&gt; and &lt;tbody&gt;&lt;/tbody&gt; tags:
```html
<table>
  <caption>Example</caption> <!--optional-->
    <thead>
      <tr>
        <th>Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sample</td>
        ...
```
### Customizations 

Within the <em>responsive-tables.css</em> style sheet, modifying the values of the 'top' and 'left' properties will change the perceived table heading padding at the &quot;mobile&quot; view. This will enable consitancy between the table heading and table data padding:
```css
.jrt td:before { 
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
