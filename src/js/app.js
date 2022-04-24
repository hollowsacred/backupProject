import * as Slick from "./modules/slick.min.js";
import * as functions from "./modules/functions.js";
console.log("Кабаок");
$(document).ready(function () {
  $(".carousel__inner").slick({
    //    adaptiveHeight:true,
    autoplay: false,
    prevArrow: `<button type="button" class="slick-prev"><img src="img/prevArrow.png"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="img/nextArrow.png"></button>`,
  });
});

let slider = tns({
  container: ".carousel__tiny",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controlsText: [
    `<img src="img/prevArrow.png"></img>`,
    `<img src="img/nextArrow.png"></img>`,
  ],
  nav: false,
});

let catalog = document.querySelector(".catalog-item__body");
let catalogActive = document.querySelector(".catalog-item__body_active");
let count = 1;
let link = document.querySelectorAll(".catalog-item__link");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    catalog.style.display = "none";
    catalogActive.style.display = "block";

    if (count % 2 == 0) {
      catalog.style.display = "flex";
      catalogActive.style.display = "none";
      console.log("ребутош " + count);
    }

    count++;
    console.log(count);
  });
}
