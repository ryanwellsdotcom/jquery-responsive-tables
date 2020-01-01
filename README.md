## jquery-responsive-tables

[![npm version](https://badge.fury.io/js/jquery-responsive-tables.svg)](https://badge.fury.io/js/jquery-responsive-tables)

A lightweight jQuery plugin that enables HTML table markup to become responsive. It provides a clean list view via devices with small screens, then returns to the traditional view for larger screens. It can work for multiple tables on a single page, as well as with tables that contain various combinations of merged cells. It uses CSS for the rendering and is easily customized.

<img src="https://ryanwells.com/examples/responsive-tables/screenshot.png" width="295px">

### <a href="http://ryanwells.com/examples/responsive-tables/" target="_blank">Demo</a>

### Usage

```
npm install jquery-responsive-tables --save
```

-   The plugin requires <a href="http://jquery.com/download/" target="_blank">jQuery</a> 1.11 or above.
-   Include the <em>jquery.responsive-tables.js</em> and the <em>responsive-tables.css</em> in your project. The CSS properties can be overridden to meet your needs.
-   Invoke the plugin within your custom scripts file:

```javascript
$(document).ready(function() {
    $.responsiveTables();
});
```

-   Ensure that tables are marked up semantically using the &lt;thead&gt; (optional) and &lt;tbody&gt; (required) tags:

```html
<table>
    <caption>
        Example
    </caption>
    <!--optional-->
    <thead>
        <tr>
            <th>Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sample</td>
            ...
        </tr>
    </tbody>
</table>
```

### Customizations

Within the <em>responsive-tables.css</em> style sheet, change the media query breakpoint as needed:

```css
@media only screen and (max-width: 768px);
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
