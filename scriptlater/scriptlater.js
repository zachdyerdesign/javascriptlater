//scriptlater is the namespace to hold all of the modules
//Each module will have the data that goes with it
var scriptlater = {
  config:  {
    "title" : "scriptlater",
    "baseurl" : "/",
    "theme" : "caringclowns",
    "author" : "Zach Dyer Design",
    "website" : "http://zachdyerdesign.com/",
    "year" : new Date().getFullYear()
  }
};

scriptlater.core = {
    get: function(config) {
      var html = scriptlater.config[config];
      document.write(html);
    },
    import: function(imports) {
    	// Check just in case something weird was passed in or nothing at all
    	imports = imports || [];
    	var html = "";
    	for(var i = 0; i < imports.length; i++) {
    		var imp = imports[i];
    		html += "<script type='text/javascript' language='javascript' src='scriptlater/modules/" + imp + ".js'></script>";
    	}
    	document.write(html);
    },
    theme: function(theme) {
    	// If theme is undefined use the one in the config file
    	if(typeof theme == 'undefined') {
    		theme = scriptlater.config.theme;
    	}
    	var html = '<link rel="stylesheet" type="text/css" href="scriptlater/themes/' + theme + '.css">';
    	document.write(html);
    }
  };
