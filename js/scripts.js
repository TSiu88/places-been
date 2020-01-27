//BUSINESS LOGIC for placesVisited
function PlacesVisited(){
  this.places = [];
  this.currentId = 0;
}

PlacesVisited.prototype.addPlace = function(place){
  place.id = this.assignId();
  this.places.push(place);
}

PlacesVisited.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

PlacesVisited.prototype.findPlace = function(id){
  for (var i=0; i<this.places.length; i++){
    if(this.places[i]){
      if(this.places[i].id == id){
        return this.places[i];
      }
    }
  };
  return false;
}

PlacesVisited.prototype.deletePlace = function(id){
  for (var i=0; i<this.places.length; i++){
    if(this.places[i]){
      if(this.places[i].id == id){
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

//BUSINESS LOGIC for a Place
function Place(placeName, landmarks, datesVisited, notes, id){
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.datesVisited = datesVisited;
  this.notes = notes;
  this.id = id;
}

function toText(place){
  var outputString = place.placeName + " - " + place.landmarks + " " + place.datesVisited + " " + place.notes;
  console.log(outputString);
  return outputString;
}

//USER INTERFACE LOGIC
$(document).ready(function(){
  var placesVisited = new PlacesVisited();
  $(".btn").on("click", function(){
  //$("#placeForm").submit(function(event){
    event.preventDefault();

    var buttonId = this.id;
    var placeName = $("input#placeName").val();
    var landmark = $("#landmarks").val();
    var dates = $("#datesVisited").val();
    var notes = $("#placeNotes").val();
    

    if(placeName !== "" && buttonId === "addPlace"){
      var place1 = new Place(placeName, landmark, dates, notes);
      placesVisited.addPlace(place1);
      //console.log(placesVisited.places);

      $("#output").show();
      var button = document.createElement("button");
      var lastIndex = placesVisited.places.length -1;
      button.innerHTML = placesVisited.places[lastIndex].placeName;
      button.id = placesVisited.places[lastIndex].id;
      button.setAttribute("class", "btn");
      $("#placeButtons").append(button);
      
      
    }else{
      alert("Name required. Please enter place name.")
    }

    $(".btn").on("click", function(){
  
      var buttonId = this.id;
      if(buttonId !== "addPlace"){
        var placeObject = placesVisited.findPlace(buttonId);
    
        var textString = toText(placeObject);
        $("#outputText").text(textString);
      }
  
    });
  });

});