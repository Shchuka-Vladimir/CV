const elementAnchor = document.querySelector(".anchor-wrapper");
const elementIconMenu = document.querySelector(".icon-menu");
elementIconMenu.addEventListener("click", showNav, false);
function showNav() {
  elementIconMenu.classList.toggle("show-nav");
}
window.addEventListener("scroll", showShadow, false);
function showShadow() {
  if (window.pageYOffset > 50) {
    elementAnchor.classList.add("show-shadow");
  } else {
    elementAnchor.classList.remove("show-shadow");
  }
}
