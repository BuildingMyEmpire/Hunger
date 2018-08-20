
//var elements = document.getElementsByClassName("column");

//var modal = document.querySelector(".modal");
//var closeButton = document.querySelector(".close-button");


//function toggleModal() {
  //  modal.classList.toggle("show-modal");
//}

//function windowOnClick(event) {
      //  toggleModal();

//}

//closeButton.addEventListener("click", toggleModal);
// window.addEventListener("scroll", function () {
//     scrollFunction();
// }, false);
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        console.log("shown");
    } else {
        document.getElementById("myBtn").style.display = "none";
        console.log("not shown");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function smallFunction() {
    document.getElementById("sizeText").style.fontSize = "small";
}

function mediumFunction() {
    document.getElementById("sizeText").style.fontSize = "medium";
}

function largeFunction() {
    document.getElementById("sizeText").style.fontSize = "large";
}
