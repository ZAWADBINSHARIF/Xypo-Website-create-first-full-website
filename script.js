'use strict'


// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";

menuBtn.onclick = () => {
    if (sideNav.style.right == "-250px")
        sideNav.style.right = "0"
    else
        sideNav.style.right = "-250px"
}
