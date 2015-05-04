function getMenu(id) {
	var 
	
	xmlhttp = new XMLHttpRequest(),
	url = "./data/menus.json",
	html = "";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			myFunction(myArr);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	html = "<ul id='" + id + "'>";
	html += "</ul>"
	
	document.write(html);
}