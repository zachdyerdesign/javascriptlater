scriptlater.include = {
  data: {
    footer: "<p>&copy; " + scriptlater.config.year + " " + scriptlater.config.title + " | Designed by <a href='http://" + scriptlater.config.website + "' target='_blank'>" + scriptlater.config.author + "</a></p>",
  },
  get: function() {
  	var
    	general = scriptlater.config,
    	html = "<p>&copy;" + scriptlater.config.year + " " + general.title + " | Designed by <a href='http://" + general.website + "' target='_blank'>" + general.author + "</a></p>";
  	document.write(html);
  }
};
