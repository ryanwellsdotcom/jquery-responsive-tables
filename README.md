##jquery.responsive-tables

A lightweight jQuery plugin  that allows table markup to become fully responsive. It provides a clean list  view via devices with small screens. It can work for multiple tables on a  single page, as well as with tables that contain various combinations of merged  cells. Best of all, it uses pure CSS for the rendering. 

### How to use

<ol>
    <li>include the <em>responsive-tables.css</em> in your page within the &lt;head&gt;&lt;/head&gt; tags</li>
    <li>Include the <em>jquery.responsive-tables.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a></li>
    invoke the plugin within your custom scripts file, e.g. 
    <br>
    ```javascript
    $(document).ready(function() {
        $.responsiveTables();    
    });    
    ```
    <li>Ensure that tables are marked up using the &lt;thead&gt;&lt;/thead&gt; and &lt;tbody&gt;&lt;/tbody&gt; tags</li>
    <li>Add the class 'respond' to the &lt;table&gt; tag of the chosen table(s), e.g.
    <br>
    ```html
    <table class="respond">
        <caption>Example</caption>
        <thead>
            ...
    ```
    </li>
</ol>

