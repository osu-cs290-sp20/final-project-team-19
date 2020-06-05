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
let apiData;
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


    fetch(apiUrl)
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);

      });
    }
  )
  .then(data => apiData = data)
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



  // var apiData;
  //     fetch('https://cors-anywhere.herokuapp.com/'+ apiUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       apiData=data;
  //     })
  //     .catch(error =>console.lof("Error"))
  //
  //     generateCreatures(numberInput, data);
}//end of the else
generateCreatures(numberInput, apiData);
}


function generateCreatures(num, data){
  console.log("here is the data", data);

}

//prompts user for correct inputs
function prompt(){
  alert("Enter values into the fields");
  modal.style.display = "block";
  console.log("button clicked");

}
//functions for handling the drop down menu
