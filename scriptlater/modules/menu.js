scriptlater.menu = {
  config: [
  	{
  		"id" : "main-menu",
  		"items" : [
  			{"name" : "Home", "link" : "index.html", "target" : "_self", "class" : ""},
  			{"name" : "About Us", "link" : "about.html", "target" : "_self", "class" : ""},
  			{"name" : "Clown Prayer", "link" : "clown-prayer.html", "target" : "_self", "class" : ""},
  			{"name" : "Donate", "link" : "donate.html", "target" : "_self", "class" : ""},
  			{"name" : "Contact", "link" : "contact.html", "target" : "_self", "class" : ""}
  		]
  	} , {
  		"id":    "footer-menu",
  		"items": [
  			{"name" : "Privacy Policy", "link": "/privacy-policy", "target" : "_self", "class" : ""}
  		]
  	}
  ],
  get: function(id, menu_class) {
  	var
    	menu,
    	html = "",
    	menus = this.config,
    	config = scriptlater.config;

  	for(var i = 0; i < menus.length; i++) {
  		if(menus[i].id === id) {
  			menu = menus[i];
  		}
  	}

    if(!menu) {
      console.error("Could not find Menu ID for scriptlater.menu.get() in scriptlater.menu.data");
    }

  	html += "<ul id='" + id + "' class='" + menu_class + "'>";

  	for(var i = 0; i < menu.items.length; i++) {
  		var item = menu.items[i];
  		html += "<li><a href='" + config.baseurl + item.link + "' target='" + item.target + "' class='"+item.class+"'>" + item.name + "</a></li>";
  	}

  	html += "</ul>";

  	document.write(html);
  }
};
