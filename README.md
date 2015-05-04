# JavaScriptlater

## Overview
JavaScriplater is a website templating engine designed to run on free web hosts so you can easily manage your website with free web hosting such as Github Pages and Google Drive.

### Instructions
1. Download the files from https://github.com/zachdyerdesign/javascriptlater
2. Go to data/data.js to update general, menu, and footer information.
3. Use the JavaScriptlater functions inside of script tags `<script> JavaScriptlater.getMenu("main-menu") </script>` anywhere in your html to add dynamic menus and more.

### Templating Functions
- `JavaScriptlater.getMenu(name)` - Use this to get use your dynamic menu stored in JavaScriptlater.data.menus
- `JavaScriptlater.getFooter()` - Use this to display your footer information stored in JavaScriptlater.data.footer
- `JavaScriptlater.getIcon(icon, size)` - Use this to display an icon from font awesome. Find more icons at http://fortawesome.github.io/Font-Awesome/icons/

## Demo
http://zachdyerdesign.github.io/javascriptlater
