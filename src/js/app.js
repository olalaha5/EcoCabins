import * as flsFunctions from "./modules/modules.js";
flsFunctions.isWebp()
flsFunctions.navigation() // если есть бургер меню

document.addEventListener('DOMContentLoaded', () => {
    $('.second-section__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
