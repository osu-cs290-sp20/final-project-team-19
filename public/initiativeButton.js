var initiativeButton= document.getElementById("create-initiative-button");

var closeButton= document.getElementsByClassName("modal-close-button");
closeButton[0].addEventListener('click', closeModal);

var cancelButton= document.getElementsByClassName("modal-cancel-button");
cancelButton[0].addEventListener('click', closeModal);

var acceptButton= document.getElementsByClassName("modal-accept-button");
acceptButton[0].addEventListener('click', acceptModal);

initiativeButton.onclick = function() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var searchCreatureModal = document.getElementById('search-creature-modal');
  
    modalBackdrop.classList.remove('hidden');
    searchCreatureModal.classList.remove('hidden');
  
  
    document.getElementById("modal-text-input").value= "";
    document.getElementById("modal-number-input").value= "";
  
  }