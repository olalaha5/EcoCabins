/* проверка на поддержку webp и выставление нужных классов */
export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data: image / webp; base64, UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA / veff / 0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className)
    })
}
/*запуск віпадающего меню*/
export function navigation() {
    let burger = document.querySelector('.menu__burger')
    let body = document.querySelector('.menu__body')
    burger.addEventListener('click', () => {
        body.classList.toggle('menu__body_active');
        burger.classList.toggle('button-burger_active');
        document.body.classList.toggle('lock')
    })
};