var JavaScriptlater = {}; 

JavaScriptlater.getMenu = function(id) {
	var 
	menu,
	html = "",
	menus = JavaScriptlater.data.menus;
	
	for(var i = 0; i < menus.length; i++) {
		if(menus[i].id === id) {
			menu = menus[i];
		}
	}
	
	html += "<ul id='" + id + "' class='nav navbar-nav'>";
	
	for(var i = 0; i < menu.items.length; i++) {
		var item = menu.items[i];
		html += "<li><a href='" + item.link + "' target='" + item.target + "' class='"+item.class+"'>" + item.name + "</a></li>";
	}
	
	html += "</ul>";
	
	document.write(html);
}

JavaScriptlater.getFooter = function() {
	var 
	footer = JavaScriptlater.data.footer,
	general = JavaScriptlater.data.general,
	year = new Date().getFullYear(),
	html = "<p>&copy;" + year + " "+general.brand+" | Designed by <a href='http://" + footer.website + "' target='_blank'>" + footer.author + "</p>";
	document.write(html);
}

JavaScriptlater.getIcon = function(icon, size) {
	var
	html = "<i class='fa fa-"+ icon +" " + size + "'></i>";
	document.write(html);
};