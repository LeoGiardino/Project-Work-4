let navbar = document.querySelector("nav");
let menuBtn = document.querySelector('nav div:last-child > button');
let defaultColor = "#ffc017";
let scrollColor = "#ffffff";
let btnColor = "#7cff17";
let btnOriginal = "#000000";
let isScrolledPastThreshold = false;

document.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    if (!isScrolledPastThreshold) {

      isScrolledPastThreshold = true;
      menuBtn.style.transition = "background-color 0.5s ease";
      navbar.style.transition = "background-color 0.5s ease";
    }
    navbar.style.backgroundColor = scrollColor;
    menuBtn.style.backgroundColor = btnColor;
    
  } else {
    if (isScrolledPastThreshold) {

      isScrolledPastThreshold = false;
      navbar.style.transition = "background-color 0.5s ease";
    }
    navbar.style.backgroundColor = defaultColor;
    menuBtn.style.backgroundColor = btnOriginal;
    
  }
});