var nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.style.background = "#ffffff";
    } else {
        nav.style.background = "transparent";
    }
}