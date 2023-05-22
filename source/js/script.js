let nav = document.querySelector(".main-navigation");
let toggle = document.querySelector(".main-navigation__toggle");

nav.classList.remove("nav--nojs");

toggle.addEventListener("click", function () {
  if (nav.classList.contains("main-navigation--closed")) {
    nav.classList.remove("main-navigation--closed");
    nav.classList.add("main-navigation--opened");
  } else {
    nav.classList.add("main-navigation--closed");
    nav.classList.remove("main-navigation--opened");
  }
});

