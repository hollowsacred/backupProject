import * as Slick from "./modules/slick.min.js";
import * as functions from "./modules/functions.js";
console.log("Кабаок");
$(document).ready(function(){
    $('.carousel__inner').slick({
    //    adaptiveHeight:true,
       autoplay:false,
       prevArrow: `<button type="button" class="slick-prev"><img src="img/prevArrow.png"></button>`,
       nextArrow: `<button type="button" class="slick-next"><img src="img/nextArrow.png"></button>`,
      });
     
  });

  let slider = tns({
    container: '.carousel__tiny',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText:[
        `<img src="img/prevArrow.png"></img>`,`<img src="img/nextArrow.png"></img>`
    ],
    nav:false,
  });

   
  