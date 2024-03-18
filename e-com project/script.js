window.addEventListener("scroll", function () {
    var navbottom = document.querySelector(".navbottom");
    navbottom.classList.toggle("sticky", window.scrollY > 0);
})