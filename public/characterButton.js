var createCharacterButton= document.getElementById("create-character-button");

var closeButton= document.getElementsByClassName("character-close-button");
closeButton[0].addEventListener('click', closeCharacter);

var cancelButton= document.getElementsByClassName("character-cancel-button");
cancelButton[0].addEventListener('click', closeCharacter);

var acceptButton= document.getElementsByClassName("character-accept-button");
acceptButton[0].addEventListener('click', acceptCharacter);


createCharacterButton.onclick = function() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createCharacterModal = document.getElementById('create-character-modal');

  modalBackdrop.classList.remove('hidden');
  createCharacterModal.classList.remove('hidden');


  var textFields = document.getElementsByClassName("modal-text-input");
  var fields = document.getElementsByClassName("modal-number-input");

  for(var i =0;i<textFields.length;i++) {
    textFields[i].value = "";
  }

  for(var i =0;i<fields.length;i++) {
    fields[i].value = "";
  }
}

function closeCharacter(){
  var modalBackdrop = document.getElementById('modal-backdrop');
  var searchCreatureModal = document.getElementById('create-character-modal');

  modalBackdrop.classList.add('hidden');
  searchCreatureModal.classList.add('hidden');

  var fields = document.getElementsByClassName("modal-number-input");
  var textFields = document.getElementsByClassName("modal-text-input");


  for(var i =0;i<textFields.length;i++) {
    textFields[i].value = "";
  }
  for(var i =0;i<fields.length;i++) {
    fields[i].value = "";
  }
}




//this function will accept the modal inputs, and check them for incorrect inputs
function acceptCharacter(){
  var textInput = document.getElementsByClassName("modal-text-input");
  var numberInput=document.getElementsByClassName("modal-number-input");
  var check = 0;
  var isNotNum = 0;
  var tempArray = [];

  for(var i=0; i<textInput.length ; i++){
    if(textInput[i].value ===""){
      check = 1;
    }
  }


  for(var i =0;i<numberInput.length;i++) {
    tempArray[i] = parseInt(numberInput[i].value,10);
    if(numberInput[i].value=="" || !(Number.isInteger(tempArray[i]))){
      check = 1;
    }
  }
  if(check) {
    for(var i=0;i<numberInput.length;i++) {
      if(!(Number.isInteger(tempArray[i]))) {
        isNotNum = 1;
      }
    }
    if(isNotNum) {
      numPrompt();
    }else {
      prompt();
    }
  }else{
    // this will call the function that handles the initiative rolling/displaying of the creature


    var modalBackdrop = document.getElementById('modal-backdrop');
    var searchCreatureModal = document.getElementById('create-character-modal');

    modalBackdrop.classList.add('hidden');
    searchCreatureModal.classList.add('hidden');

    var charInfo = [];

    for(var i=0;i<numberInput.length;i++) {
      charInfo[i]=numberInput[i].value
    }



    storeCharacterInDB();

  }//end of the else

}

function storeCharacterInDB() {


  var textInput = document.getElementsByClassName("modal-text-input");
  var numberInput=document.getElementsByClassName("modal-number-input");
  var charInfo = [];
var textInfo= [];

  for(var i=0;i<textInput.length;i++) {
    textInfo[i]=textInput[i].value
  }
  for(var i=0;i<numberInput.length;i++) {
    charInfo[i]=numberInput[i].value
  }


  var request = new XMLHttpRequest();

  var requestUrl = "/characters/newCharacter";
  request.open('POST', requestUrl);

  var requestBody = JSON.stringify({
    name: textInfo[0],
    cla: textInfo[1],
    lvl: charInfo[0],
    str: charInfo[1],
    dex: charInfo[2],
    con: charInfo[3],
    int: charInfo[4],
    wis: charInfo[5],
    cha: charInfo[6],
    ac: charInfo[7],
    hp: charInfo[8],
    ms: charInfo[9]
  });

  request.setRequestHeader(
    'Content-Type',
    'application/json'
  );

  request.addEventListener('load', function (event) {
    if (event.target.status === 200) {
      var CharacterTemplate = Handlebars.templates.character;
      var newCharacterHTML = CharacterTemplate({
        name: textInfo[0],
        cla: textInfo[1],
        lvl: charInfo[0],
        str: charInfo[1],
        dex: charInfo[2],
        con: charInfo[3],
        int: charInfo[4],
        wis: charInfo[5],
        cha: charInfo[6],
        ac: charInfo[7],
        hp: charInfo[8],
        ms: charInfo[9]
      });
      var characterContainer = document.querySelector('.creature-container');
      characterContainer.insertAdjacentHTML('beforeend', newCharacterHTML);
    } else {
      alert("Error storing photo in database: " + event.target.response);
    }
  });






  /*var request = new XMLHttpRequest();
  var requestURL = "characters/newCharacter";
  request.open('POST',requestURL);

  var requestBody = JSON.stringify(characterContext);

  request.setRequestHeader(
  'Content-Type', 'application/json'
);

request.addEventListener('load', function (event) {
if (event.target.status === 200) {
var characterHtml = Handlebars.templates.character(characterContext);
var characterContainer = document.querySelector(".creature-container");
characterContainer.insertAdjacentHTML('beforeend', characterHtml);
/*
* Update UI to indicate that photo was successfully
* stored.
} else {
alert("error storing character in database" + event.target.response)
}
});*/

request.send(requestBody);
}
