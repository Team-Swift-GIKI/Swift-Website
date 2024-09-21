let prevScrollpos = window.scrollY;
const nav = document.getElementsByTagName("nav")[0]
const swiftlogo = document.getElementById("SwiftLogoCentral")
const plane = document.getElementById("ScrollBarPlane")
const bar = document.getElementById("ScrollBarTrack")
const body = document.body;
const textarea = document.getElementsByTagName('textarea')[0];
const form = document.getElementsByTagName('form')[0];
const sendername = document.getElementsByName('sender')[0];
const senderemail = document.getElementsByName('email')[0];
const menubutton = document.getElementById("menuicon");
const menuobj = document.getElementById("sidenav");

var initial_right_plane_latch = false;

window.onscroll = function () {
  let currentScrollPos = scrollY;
  if (prevScrollpos >= currentScrollPos) {
    // Scroll up
    nav.style.top = "0";
    swiftlogo.style.top = "0";
    plane.style.rotate = "0deg";
  } else {
    // Scroll down
    nav.style.top = "-12vw";
    swiftlogo.style.top = "-12vw";
    plane.style.rotate = "180deg";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos >= window.innerHeight) {
    nav.style.background = "var(--SwiftColor)";
  }
  else {
    nav.style.background = "#ffffff00";
  }

  if (currentScrollPos <= 100 && !initial_right_plane_latch) {
    plane.style.rotate = "90deg";
  }
  else {
    initial_right_plane_latch = true;
  }


  let planeTgt = (window.scrollY / body.scrollHeight) * 112;
  plane.style.top = planeTgt + "vh";
};

plane.style.position = "fixed";
plane.style.width = "4vw";
plane.style.marginLeft = "96vw";
plane.style.zIndex = "100";
plane.style.rotate = "90deg";

document.onload = function () {
  nav.style.top = "0";
  swiftlogo.style.top = "0";
  if (currentScrollPos >= window.innerHeight) {
    nav.style.background = "var(--SwiftColor)";
  }
  else {
    nav.style.background = "#ffffff00";
  }
};

textarea.addEventListener('input', function () {
  // Reset height to auto to calculate the new height
  this.style.height = 'auto';
  // Set the height to the scrollHeight to expand as needed
  this.style.height = this.scrollHeight + 'px';
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(senderemail.value.toLowerCase())) {
    alert("Email is invalid")
  }
  console.log("Email validated!")

  fetch('/sendData', {
    method: 'POST',
    body: sendername.value.length + sendername.value + senderemail.value.length + senderemail.value + textarea.value.length + textarea.value
  }).then(response => response.json()).then(data => alert("Form submitted successfully! \nRESPONSE: " + data))
    .catch(error => alert("There was an issue submitting the form. \nMaybe the internet disconnected."))
})

var menuopen = false;

menubutton.addEventListener("click", (e) => {
  console.log("test")
  e.preventDefault();
  if (!menuopen) {
    menubutton.src = "images/cross.webp"
    menuobj.style.marginLeft = "0";
    menuopen = true;
  }
  else {
    menubutton.src = "images/menuicon.webp"
    menuobj.style.marginLeft = "-100vw";
    menuopen = false;
  }
})

menubutton.src = "images/menuicon.webp"
menuobj.style.marginLeft = "-100vw";
menuopen = false;