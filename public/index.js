var modal = document.getElementById("search-creature-modal");

var initiativeButton= document.getElementById("create-initiative-button");

var closeButton= document.getElementsByClassName("modal-close-button");
closeButton[0].addEventListener('click', closeModal);

var cancelButton= document.getElementsByClassName("modal-cancel-button");
cancelButton[0].addEventListener('click', closeModal);

var acceptButton= document.getElementsByClassName("modal-accept-button");
acceptButton[0].addEventListener('click', acceptModal);

var searchButton = document.getElementById("navbar-search-button");
var url= "http://dnd5eapi.co/api/monsters/";

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
var apiUrl=url+textInput;
console.log("Here is the link to be requested: ", apiUrl);


  }

}
//prompts user for correct inputs
function prompt(){
  alert("Enter values into the fields");
  modal.style.display = "block";
  console.log("button clicked");

}
