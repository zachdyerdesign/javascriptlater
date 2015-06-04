var JavaScriptlater = {};

// imports gets all the data and packages for JavaScriptlater from the config.js file
JavaScriptlater.imports = function() {
	var imports = JavaScriptlater.data.config.import;
	var html = "";
	for(var i = 0; i < imports.length; i++) {
		var imp = imports[i];
		html += "<script type='text/javascript' language='javascript' src='" + imp + "'></script>";
	}
	document.write(html);
};


// getMenu the menu data from data/menus.js and generates a bootstrap menu
JavaScriptlater.getMenu = function(id) {
	var
	menu,
	html = "",
	menus = JavaScriptlater.data.menus,
	config = JavaScriptlater.data.config;

	for(var i = 0; i < menus.length; i++) {
		if(menus[i].id === id) {
			menu = menus[i];
		}
	}

	html += "<ul id='" + id + "' class='nav navbar-nav'>";

	for(var i = 0; i < menu.items.length; i++) {
		var item = menu.items[i];
		html += "<li><a href='" + config.baseurl + item.link + "' target='" + item.target + "' class='"+item.class+"'>" + item.name + "</a></li>";
	}

	html += "</ul>";

	document.write(html);
}

// getFooter gets the footer data from data/footer.js and writes the content
JavaScriptlater.getFooter = function() {
	var
	footer = JavaScriptlater.data.footer,
	general = JavaScriptlater.data.config,
	year = new Date().getFullYear(),
	html = "<p>&copy;" + year + " "+general.brand+" | Designed by <a href='http://" + footer.website + "' target='_blank'>" + footer.author + "</p>";
	document.write(html);
}

JavaScriptlater.getIcon = function(icon, size) {
	var
	html = "<i class='fa fa-"+ icon +" " + size + "'></i>";
	document.write(html);
};
