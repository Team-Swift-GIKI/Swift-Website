let prevScrollpos = window.scrollY;

let nav = document.getElementsByTagName("nav")[0]
let swiftlogo = document.getElementById("SwiftLogoCentral")

window.onscroll = function() {
  let currentScrollPos = scrollY;
  if (prevScrollpos >= currentScrollPos) {
    // Scroll up
    nav.style.top = "0";
    swiftlogo.style.top = "0";
  } else {
    // Scroll down
    nav.style.top = "-12vw";
    swiftlogo.style.top = "-12vw";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos >= window.innerHeight) {
    nav.style.background = "var(--SwiftColor)";
  }
  else {
    nav.style.background = "#ffffff00";
  }
};

document.onload = function() {
    nav.style.top = "0";
    swiftlogo.style.top = "0"; 
    if (currentScrollPos >= window.innerHeight) {
        nav.style.background = "var(--SwiftColor)";
    }
    else {
        nav.style.background = "#ffffff00";
    }
};