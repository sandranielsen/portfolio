// Transparent to solid coloured navigation bar //
var nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 50) {
        nav.style.background = "#ffffff";
    } else {
        nav.style.background = "transparent";
    }
}