// Smooth Scroll - https://github.com/cferdinandi/smooth-scroll

var scroll = new SmoothScroll('.navbar a[href*="#"]', {
   speed: 500
});

let bg = document.getElementById("bg");
let moom = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road")
let road = document.getElementById("text");
//console.log(text);

window.addEventListener('scroll', function () {

   var value = window.scrollY;

   ola.style.top = value * 1 + 'px';
   sm.style.left = -value * 0.5 + 'px';
   mountain.style.top = -value * 0.5 + 'px';
   road.style.top = value * 1 + 'px';

})

