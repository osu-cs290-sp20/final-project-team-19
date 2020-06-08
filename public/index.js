var modal = document.getElementById("search-creature-modal");

// var initiativeButton= document.getElementById("create-initiative-button");
//
// var closeButton= document.getElementsByClassName("modal-close-button");
// closeButton[0].addEventListener('click', closeModal);
//
// var cancelButton= document.getElementsByClassName("modal-cancel-button");
// cancelButton[0].addEventListener('click', closeModal);
//
// var acceptButton= document.getElementsByClassName("modal-accept-button");
// acceptButton[0].addEventListener('click', acceptModal);

var searchButton = document.getElementById("navbar-search-button");
var url= "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/";
var equipmentUrl="https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/equipment/"
var error;



// initiativeButton.onclick = function() {
//   var modalBackdrop = document.getElementById('modal-backdrop');
//   var searchCreatureModal = document.getElementById('search-creature-modal');
//
//   modalBackdrop.classList.remove('hidden');
//   searchCreatureModal.classList.remove('hidden');
//
//
//   document.getElementById("modal-text-input").value= "";
//   document.getElementById("modal-number-input").value= "";
//
// }

//___________________________________________
//This function takes the users input from the search bar and puts the stat block in place
searchButton.onclick = function() {

  var textInput = document.getElementById("navbar-search-input").value;
  console.log("here is the users search query input: ", textInput);
  var newUrl= createUrl(textInput, url);
//get the search query from the drop down menu
  var searchQuery = document.getElementById("search-query");
// access the option selected by the user
  var searchField=(searchQuery.options[searchQuery.selectedIndex].value);
//check the users input and generate the proper link for the specified field
    if(searchField =="Monsters"){
      var creatureUrl=createUrl(textInput, url);
      const creatureData = fetch(creatureUrl)
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          inputPrompt(textInput);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {


          generateCreatureStatBlock(data);

        });
      }
    )
    .then(data => apiData = data)
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
      console.log("Here is the creatureURl: ", creatureUrl);
  }else if(searchField== "Equipment"){

    generateEquipmentLink(textInput);
  }else if(searchField== "Spells"){

    console.log("here is the users search query input: ", textInput);
  }else{
    var textInput=searchField;
    inputPrompt(textInput);
  }
}
//___________________________________________


function getData(data){
  console.log(data);

}


function generateEquipmentLink(textInput){
console.log("Here is the requested equipment item: ", textInput);
// make input lowercase
var textInputLower = textInput.toLowerCase();

//replace all of the spaces with dashes
var newUrl = textInputLower.replace(/ /g, "-");
var equipmentRequest=equipmentUrl+newUrl;
console.log("The requested search is: ", equipmentRequest);
//add the function to get the data and add the data to the dom
const creatureData = fetch(equipmentRequest)
.then(function(response) {
  if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
    response.status);
    inputPrompt(textInput);
    return;
  }
  // Examine the text in the response
  response.json().then(function(data) {

    console.log("About to generate equipment");
    generateEquipment(data);

  });
}
)
.then(data => apiData = data)
.catch(function(err) {
console.log('Fetch Error :-S', err);
});


}
//___________________________________________
//This function will handle building the equipment templates
function generateEquipment(data){
  var name = data["name"];
  var equipmentCost = data["cost"];
  var equipmentCategory = data["equipment_category"];
  var damage= data["damage"];
  var range = data["range"];
  var properties = data["properties"];
var des= data["desc"];

  console.log(name);
  console.log(equipmentCost);
  console.log(properties);
  if (damage.length == 0){
    damage=[{name:"N/A"}];
  }
  if (range.length == 0){
      range= "N/A";
  }
  if(des==""){
    des="N/A";
  }

  var equipmentInfoContext = {
    name: name,
    equipment_cost: equipmentCost,
    equipment_category: equipmentCategory,
    damage: damage,
    range:range,
    properties: properties,
    desc: des
  }

  //checking if this is a new creature or a copy of one already on the sheet
  var temp=1;
  for(var i =0; i<priorInfo.length;i++){
    if(JSON.stringify(priorInfo[i])==JSON.stringify(equipmentInfoContext)){
      temp=0;
    }
  }

  if(temp==1){
    var equipmentHtml = Handlebars.templates.equipmentTemplate(equipmentInfoContext);

    var creatureContainer = document.querySelector('main.creature-info-container');
    creatureContainer.insertAdjacentHTML('beforeend', equipmentHtml);
    priorInfo[priorInfo.length]=equipmentInfoContext;
  }
}



// Closes the modal button
function closeModal(){
  var modalBackdrop = document.getElementById('modal-backdrop');
  var searchCreatureModal = document.getElementById('search-creature-modal');

  modalBackdrop.classList.add('hidden');
  searchCreatureModal.classList.add('hidden');
  document.getElementById("modal-text-input").value= "";
  document.getElementById("modal-number-input").value= "";
}




//this function will accept the modal inputs, and check them for incorrect inputs
function acceptModal(){
  error=0;
  var apiData;
  var textInput = document.getElementById("modal-text-input").value;
  var numberInput=document.getElementById("modal-number-input").value;

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
    var modalBackdrop = document.getElementById('modal-backdrop');
    var searchCreatureModal = document.getElementById('search-creature-modal');

    modalBackdrop.classList.add('hidden');
    searchCreatureModal.classList.add('hidden');
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
  var armorClass=data["armor_class"];
  var creatureName = data["name"];
  console.log("HERE ARE THE HIT POINTS FROM THE OBJECT: ", hitPoints);
  // console.log("Here is the data in the creature data function");
  // console.log("here is the data", data);
  //for(var i=0; i<num; i++){
  //var initative= Math.floor((Math.random() * 20) + 1);
  // creatureArray[i]=initative;
  //}
  var dex = data["dexterity"];
  var creatureContextArray = Array(num);

  //Creating Monster Stat block
  generateCreatureStatBlock(data);
  //done with that

  for(var i=0; i<num; i++){
    var random = Math.floor((Math.random()*20)+1);
    var init =Math.floor(random + ((dex-10)/2));

    //stupid name that can be taken out
    var sillyname=generateName();

    var creatureContext = {
      initiative: init,
      armor_class: armorClass,
      hit_points: hitPoints,
      name: creatureName,
      sname:sillyname

    }
    creatureContextArray[i] = creatureContext;
  }

  creatureContextArray.sort(function(a,b) {
    return a.initiative - b.initiative;
  });
  creatureContextArray.reverse();

  for(var i=0; i<num; i++){
    var creatureHtml = Handlebars.templates.creatureTemplate(creatureContextArray[i]);

    var creatureContainer = document.querySelector('main.creature-container');
    creatureContainer.insertAdjacentHTML('beforeend', creatureHtml);
  }
}



function inputPrompt(textInput){
  alert("Your request for: "+ textInput + " was not found in the dnd5eapi");
  modal.style.display = "block";

}
//________________________________________________________
//stupid name stuff
//based on
/*
(c) by Thomas Konings
Random Name Generator for Javascript
*/

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
  var name1 = ["Jack","Eragon","Samwise","Frodo","Gandalf","Gimli","Aragorn","Legolas","Zaque","Zacckk","Zacck","ZACK","Zakk","Zak","Rob Hess","Liam","Noah","William","James","Oliver","Benjamin","Elijah","Lucas","Mason","Logan","Emma","Olivia","Ava","Isabella","Sophia","Charlotte","Mia","Amelia","Harper","Evelyn","Piers Borngasser","Ian Bailey","Tyson Fairhurst","Ethan Hunter","Jeff","Zach","Zack","Zacc","Zachary","Bob","Joe","Brian","THE DUDE","Your Worst Enemy","Ezekiel","Michael","David","John","James","Robert","Mark","William","Richard","Thomas","Jeffrey","Steven","Joseph","Timothy","Kevin","Scott","Brian","Charles","Paul","Daniel","Christopher","Kenneth","Anthony","Gregory","Ronald","Donald","Gary","Stephen","Eric","Edward","Douglas","Todd","Patrick","Keith","Larry","Matthew","Terry","Andrew","Dennis","Randy","Jerry","Peter","Frank","Craig","Raymond","Jeffery","Bruce","Rodney","Mike","Roger","Tony","Ricky","Steve","Jeff","Troy","Alan","Carl","Danny","Russell","Chris","Bryan","Gerald","Wayne","Joe","Randall","Lawrence","Dale","Phillip","Johnny","Vincent","Martin","Bradley","Billy","Glenn","Shawn","Jonathan","Jimmy","Sean","Curtis","Barry","Bobby","Walter","Jon","Philip","Samuel","Jay","Jason","Dean","Jose","Tim","Roy","Willie","Arthur","Darryl","Henry","Darrell","Allen","Victor","Harold","Greg"]
  var name = capFirst(name1[getRandomInt(0, name1.length)]);
  return name;

}



//___________________________________________
//prompts user for correct inputs
function prompt(){
  alert("Enter values into the fields");
  modal.style.display = "block";
}


//used to check if an infosheet has already been sent.
var priorInfo=[];


function generateCreatureStatBlock(data) {
  var str = data["strength"];
  var dex = data["dexterity"];
  var con = data["constitution"];
  var int = data["intelligence"];
  var wis = data["wisdom"];
  var cha = data["charisma"];
  var name = data["name"];
  var CR = data["challenge_rating"]
  var prof = data["proficiencies"];
  var vuls = data["damage_vulnerabilities"];
  var resist = data["damage_resistances"];
  var immune = data["damage_immunities"];
  var con_immune = data["condition_immunities"];
  var sa = data["special_abilities"];
  var act = data["actions"];
  var lact = data["legendary_actions"];

  console.log(lact);
  console.log(act);
  console.log(con_immune);
  if (prof.length == 0){
    prof=[{name:"N/A"}];
  }
  if (vuls.length == 0){
    console.log("in vuls");
    vuls= "N/A";
  }
  if(resist.length == 0){
    resist="N/A";
  }
  if (immune.length == 0){
    immune="N/A";
  }
  if (con_immune.length == 0){
    con_immune=[{name:"N/A"}];
  }
  if (sa.length == 0){
    sa=[{name:"N/A"}];
  }
  if (act.length == 0){
    act=[{name:"N/A"}];
  }
  if (lact==null || lact.length == 0){
    lact=[{name:"N/A"}];
  }

  var creatureInfoContext = {
    name: name,
    CR: CR,
    str: str,
    dex: dex,
    con: con,
    int: int,
    wis: wis,
    cha: cha,
    prof: prof,
    vuls: vuls,
    resist: resist,
    immune: immune,
    con_immune: con_immune,
    sa: sa,
    act: act,
    lact: lact,
  }

  //checking if this is a new creature or a copy of one already on the sheet
  var temp=1;
  for(var i =0; i<priorInfo.length;i++){
    if(JSON.stringify(priorInfo[i])==JSON.stringify(creatureInfoContext)){
      temp=0;
    }
  }

  if(temp==1){
    var creatureInfoHtml = Handlebars.templates.creatureInfoTemplate(creatureInfoContext);

    var creatureContainer = document.querySelector('main.creature-info-container');
    creatureContainer.insertAdjacentHTML('beforeend', creatureInfoHtml);
    priorInfo[priorInfo.length]=creatureInfoContext;
  }
}
//functions for handling the drop down menu
//functions for handling the drop down menu

function individualSpells(data){
    var allSpellUrls;

    var spellContainer = document.getElementById("spell-container");

    console.log((data["results"][3]["name"]));

    for(var i=0; i<data["count"]; i++ ){
        // Create anchor element.
        var b = document.createElement('div');
        var a = document.createElement('a');

        b.classList.add("link");
        // Create the text node for anchor element.
        var link = document.createTextNode(data["results"][i]["name"]);

        // Append the text node to anchor element.
        a.appendChild(link);

        // Set the title.
        a.title = data["results"][i]["name"];

        // Set the href property.
        a.href = data["results"][i]["url"];

        b.appendChild(a);

        // Append the anchor element to the body.
        spellContainer.appendChild(b);


	}


}



function spellAPICall(){

    var spellurl = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/";
    console.log(url);
    console.log(spellurl);
    const spellData = fetch(spellurl).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            inputPrompt(textInput);
            return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
        //getting all the spells
         individualSpells(data);
        });
    }
)
  .then(data => apiData = data)
  .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function generateSpellBlock(data){
  console.log("IN the spell block");
    var name = data["name"];
    var desc = data["desc"];
    var higher_level = data["higher_level"];
    var range = data["range"];
    var components = data["components"];
    var material = data["material"];
    var ritual = data["ritual"];
    var duration = data["duration"];
    var concentration = data["concentration"];
    var casting_time = data["time"];
    var level = data["level"];
    var school = data["school"];
    var classes = data["classes"];
    var subclasses = data["subclasses"];

    var spellInfoContext = {
     name:name,
     desc:desc,
     higher_level:higher_level,
     range:range,
     components:components,
     material:material,
     ritual:ritual,
     duration:duration,
     concentration:concentration,
     time:time,
     level:level,
     school:school,
     classes:classes,
     subclasses:subclasses
	}
      var creatureContainer = document.querySelector('main.spell-container');
      creatureContainer.insertAdjacentHTML('beforeend',spellInfoContext);
}


// again with items

function generateItemBlock(data){
    var name = data["name"];
    var desc = data["desc"];
    var equipment_cat = data["equipment_category"];
    var gear_cat= data["gear_category"];
    var vehicle_cat = data["vehicle_category"];
    var weapon_cat = data["weapon_category"];
    var weapon_range = data["weapon_range"];
    var category_range = data["category_range"];
    var armor_class_base = data["armor_class"]["base"];
    var armor_class_dex = data["armor_class"]["dex_bonus"];
    var armor_class_max_bonus = data["armor_class"]["max_bonus"];
    var str_min = data["str_minimum"];
    var stealth = data["stealth_disadvantage"];
    var contents = data["contents"];
    var quantity = data["cost"]["quantity"];
    var unit = data["cost"]["unit"];
    var damage_dice = data["damage"]["damage_dice"];
    var damage_bonus = data["damage"]["damage_bonus"];
    var damage_type = data["damage"]["damage_type"];
    var range_normal = data["range"]["normal"];
    var range_long = data["range"]["long"];
    var properties = data["properties"];
    var th_damage_dice = data["2h_damage"]["damage_dice"];
    var th_damage_bonus = data["2h_damage"]["damage_bonus"];
    var th_damage_type = data["2h_damage"]["damage_type"];
    var throw_range_normal = data["throw_range"]["normal"];
    var throw_range_long = data["throw_range"]["long"];
    var speed_quantity = data["speed"]["quantity"];
    var speed_unit = data["speed"]["unit"];
    var capacity = data["capacity"];

    var new_contents;
    for(var i =0; i<contents.length();i++){
        new_contents=contents[i][item_url].slice(15);
        n=contents[i][item_url]=new_contents.charAt(0).toUpperCase() + new_contents.slice(1)
    }


    var itemInfoContext = {
     name:name,
     desc:desc,
     equipment_cat:equipment_cat,
     gear_cat:gear_cat,
     vehicle_cat:vehicle_cat,
     weapon_cat:weapon_cat,
     weapon_range:weapon_range,
     category_range:category_range,
     armor_class_base:armor_class_base,
     armor_class_dex:armor_class_dex,
     armor_class_max_bonus:armor_class_max_bonus,
     str_min:str_min,
     stealth:stealth,
     contents:contents,
     quantity:quantity,
     unit:unit,
     damage_dice:damage_dice,
     damage_bonus:damage_bonus,
     damage_type:damage_type,
     range_normal:range_normal,
     range_long:range_long,
     properties:properties,
     th_damage_dice:th_damage_dice,
     th_damage_bonus:th_damage_bonus,
     th_damage_type:th_damage_type,
     throw_range_normal:throw_range_normal,
     throw_range_long:throw_range_long,
     speed_quantity:speed_quantity,
     speed_unit:speed_unit,
     capacity:capacity
	}
    var creatureContainer = document.querySelector('main.spell-container');
    creatureContainer.insertAdjacentHTML('beforeend',itemInfoContext);
}
