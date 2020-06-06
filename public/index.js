var modal = document.getElementById("search-creature-modal");

var initiativeButton= document.getElementById("create-initiative-button");

var closeButton= document.getElementsByClassName("modal-close-button");
closeButton[0].addEventListener('click', closeModal);

var cancelButton= document.getElementsByClassName("modal-cancel-button");
cancelButton[0].addEventListener('click', closeModal);

var acceptButton= document.getElementsByClassName("modal-accept-button");
acceptButton[0].addEventListener('click', acceptModal);

var searchButton = document.getElementById("navbar-search-button");
var url= "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/";

var error;



initiativeButton.onclick = function() {
  modal.style.display = "block";

  document.getElementById("modal-text-input").value= "";
  document.getElementById("modal-number-input").value= "";

}

searchButton.onclick = function() {
  var searchTerm = document.getElementById("navbar-search-input").value;
  var newUrl=url+searchTerm;

  console.log("the url is: "+ newUrl);
  document.getElementById("navbar-search-input").value="";

}


function getData(data){
  console.log(data);

}
// Closes the modal button
function closeModal(){
  modal.style.display= "none";
  document.getElementById("modal-text-input").value= "";
  document.getElementById("modal-number-input").value= "";
}
//this function will accept the modal inputs, and check them for incorrect inputs
function acceptModal(){
error=0;
var apiData;
  var textInput = document.getElementById("modal-text-input").value;
  var numberInput=document.getElementById("modal-number-input").value;
  modal.style.display= "none";

  if(textInput===""){
    prompt();
  }else if(numberInput===""){
    prompt();
  }else{
    // this will call the function that handles the initiative rolling/displaying of the creatures
    console.log("Here are the inputs for creature: ", textInput);
    console.log("Here are the input for the number of creatures: ", numberInput);
    var apiUrl = createUrl(textInput, url);

    console.log("Here is the link to be requested: ", apiUrl);
//________________________________________________________
//working api fetch code

    const creatureData = fetch(apiUrl)
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      inputPrompt(textInput);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {


        generateCreatures(numberInput, data);

      });
    }
  )
  .then(data => apiData = data)
  .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });




}//end of the else

}
//___________________________________________
//This function will take the users input, remove the spaces and make it lower case
//________________________________________________________
function createUrl(textInput, url){
// make input lowercase
var textInputLower = textInput.toLowerCase();

//replace all of the spaces with dashes
var newUrl = textInputLower.replace(/ /g, "-");
//combine the global url to the search query
var finalUrl= url+newUrl;
//return the final url to the fetch statement
return finalUrl;

}


//___________________________________________
//This function will take the json data from the generateCreatures and show the important information
//________________________________________________________
function generateCreatures(num, data){
// var creatureArray = JSON.parse(data);
console.log(Object.keys(data));
console.log(data["hit_dice"]);
var hitPoints=data["hit_points"];
console.log("HERE ARE THE HIT POINTS FROM THE OBJECT: ", hitPoints);
  // console.log("Here is the data in the creature data function");
  // console.log("here is the data", data);
  for(var i=0; i<num; i++){
var initative= Math.floor((Math.random() * 20) + 1);
    // creatureArray[i]=initative;
  }

}
function inputPrompt(textInput){
  alert("Requested creature: "+ textInput + " was not found in the dnd5eapi");
  modal.style.display = "block";

}
//___________________________________________
//prompts user for correct inputs
function prompt(){
  alert("Enter values into the fields");
  modal.style.display = "block";


}
//functions for handling the drop down menu
