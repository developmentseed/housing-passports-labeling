'use strict';

var menuWrapper = document.querySelector('[data-hook="menu:wrapper"]');
var menuToggle = menuWrapper.querySelector('[data-hook="menu:toggle"]');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  menuWrapper.classList.toggle('pb--revealed');
});

window.addEventListener('load', function () {
  document.getElementById(`${window.location.pathname}`).classList.add("highlight");
});

let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
let listModals = document.getElementsByClassName("modal-btn");

Array.from(listModals).forEach(
  function (element, index, array) {
    element.onclick = function () {
      modal.style.display = "block";
      document.getElementById("modal-img").src = element.childNodes[0].src;
    }
  }
);

closeBtn.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
}