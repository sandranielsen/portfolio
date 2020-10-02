// Transparent to solid coloured navigation bar //
var nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.style.background = "#ffffff";
    } else {
        nav.style.background = "transparent";
    }
}


// Scroll to top button // 
mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}