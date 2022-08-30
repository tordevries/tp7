// JavaScript for TP7

// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
	
	this.recipeName = recipeName;
	this.contributor = contributorName;
	this.imageURL = imageURL;
	this.ingredients = ingredientsURL;
	this.equipment = equipmentURL;
	this.directions = directionsURL;
	
	this.displayRecipe = function() {
		
		document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
		document.querySelector("#contributor").innerHTML = this.contributor;
		document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
		loadFileInto(this.ingredients, "#ingredients ul");
		loadFileInto(this.equipment, "#equipment ul");
		loadFileInto(this.directions, "#directions ol");
		
	}
	
}


SevenLayerBars = new Recipe(
	"Seven Layer Bars", 
	"Tor", 
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5574746.jpg&w=596&h=596&c=sc&poi=face&q=85", 
	"ingredients.html", 
	"equipment.html", 
	"directions.html"
);

Tiramisu = new Recipe(
	"Tiramisu", 
	"Alison Roman", 
	"https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-master768.jpg?w=1280&q=75", 
	"tiramisu-ingredients.html", 
	"tiramisu-equipment.html", 
	"tiramisu-directions.html"
);



window.onload = function() {
	
	document.querySelector("#firstRecipe").onclick = function() {
		SevenLayerBars.displayRecipe();
	}

	document.querySelector("#secondRecipe").onclick = function() {
		Tiramisu.displayRecipe();
	}
	
	
} // end window.onload