// Transparent to solid coloured navigation bar //
let nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 50) {
        nav.style.background = "#ffffff";
    } else {
        nav.style.background = "transparent";
    }
}

//Active navigation element highlight on page scroll - source: https://codepen.io/dbilanoski/pen/LabpzG//
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navigationHighlighter);

function navigationHighlighter() {

    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

//Responsive navigation menu //
const menu = document.getElementById('menu');
const navUL = document.getElementById('nav-ul');

menu.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

function overlay() {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    return false;
}