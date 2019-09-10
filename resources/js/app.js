import Lightbox from "../js/lighbox/Lightbox";

if (document.querySelector(".article-content")) {
  let lightbox = new Lightbox(document.querySelector(".article-content"));
  lightbox.init();
}

if(document.querySelector(".cta")) {
  document.querySelector("footer").classList.remove("mt-16");
}

window.addEventListener("load", () => {
  document.querySelector("html").classList.remove("no-js");
});
