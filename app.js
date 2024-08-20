const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let loader = document.getElementById("preloader");
let over = document.getElementsByTagName("body");
window.addEventListener("load", function () {
  loader.style.display = "none";
  over.style.display = "none";
});
function openFunction() {
  document.getElementById("wha").style.transform = "scaleY(1)";
  document.getElementById("closeWha").style.transform = "scale(1)";
  document.getElementById("whatsapp").style.transform = "scale(0.0)";
  document.getElementById("wha").style.transform = "scale(1)";
  document.getElementById("suggest").style.display = "inline";
  document.getElementById("app").style.display = "none";
  document.getElementById("click").style.transform = "scale(1)";
  document.getElementById("click").style.opacity = "1";
  document.getElementById("bling").style.display = "none";
}

function closewwhaFunction() {
  document.getElementById("whatsapp").style.transform = "scale(1)";
  document.getElementById("wha").style.transform = "scaleY(0.0)";
  document.getElementById("suggest").style.display = "none";
  document.getElementById("app").style.display = "inline";
  document.getElementById("click").style.transform = "scale(0.0)";
  document.getElementById("click").style.opacity = "0";
  document.getElementById("closeWha").style.transform = "scale(0.0)";
  document.getElementById("bling").style.display = "block";
}
window.addEventListener("load",function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.transform =" translate(0%)";
      },
      10000
  )
})

document.querySelector("#close").addEventListener("click",function(){
  document.querySelector(".popup").style.transform =" translate(-180%)";
})