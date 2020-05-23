var modal = document.getElementById("search-creature-modal");

var initiativeButton= document.getElementById("create-initiative-button");

var closeButton= document.getElementsByClassName("modal-close-button");
closeButton[0].addEventListener('click', closeModal);

var cancelButton= document.getElementsByClassName("modal-cancel-button");
cancelButton[0].addEventListener('click', closeModal);

initiativeButton.onclick = function() {
  modal.style.display = "block";
   console.log("button clicked");
   document.getElementById("modal-text-input").value= "";
   document.getElementById("modal-attribution-input").value= "";

}

// Closes the modal button
function closeModal(){
  modal.style.display= "none";
  document.getElementById("modal-text-input").value= "";
  document.getElementById("modal-attribution-input").value= "";
}
