var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
        toggleModal();

}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("load", windowOnClick);
