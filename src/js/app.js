import * as Slick from "./modules/slick.min.js";
import * as functions from "./modules/functions.js";
console.log("Кабаок");
$(document).ready(function () {
  // Slider
  $(".carousel__inner").slick({
    //    adaptiveHeight:true,
    autoplay: false,
    prevArrow: `<button type="button" class="slick-prev"><img src="img/prevArrow.png"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="img/nextArrow.png"></button>`,
  });
  // Tabs
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
  // Modals
  $('[data-modal=consultation]').on('click',function () {
    $('.overlay , #consultation').fadeIn();
   
  });
  $('.modal__close').on('click',function() {
    $('.overlay , #consultation,#order,#thanks').fadeOut();

  });

  $('.catalog-item__btn').each(function (i) {
    $(this).on('click',function () {
     $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
     $('.overlay , #order').fadeIn();
    })
  })
  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type:"POST",
      url:"/mailer/smart.php",
      data:$(this).serialize()
    }).done(function () {
      $(this).find("input").val("");

      $('form').trigger("reset");
    });
    return false;
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

let catalogItems = document.querySelectorAll(".catalog-item");

function addEventHandler(item) {
  let catalogLink = item.querySelector(".catalog-item__link");
  let catalogLinkActive = item.querySelector(".catalog-item__link_active");
  let catalogBody = item.querySelector(".catalog-item__body");
  let catalogBodyActive = item.querySelector(".catalog-item__body_active");
  console.log(catalogLinkActive);
  let count = 1;
  function toggleSlide(links) {
    
    links.addEventListener("click", function (evt) {
      evt.preventDefault();
      catalogBody.style.display = "none";
      catalogBodyActive.style.display = "flex";
      
      if (count % 2 == 0) {
        catalogBody.style.display = "flex";
      catalogBodyActive.style.display = "none";
      }

      count++;
    });
  }
  toggleSlide(catalogLink);
  toggleSlide(catalogLinkActive);
}
for (let i = 0; i < catalogItems.length; i++) {
  addEventHandler(catalogItems[i]);
}

