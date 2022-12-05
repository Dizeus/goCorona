var list = document.querySelector(".navbar");
var burger = document.querySelector(".header__burger");

burger.addEventListener('click', () => {
    const result1 = list.classList.toggle("__active-list");
    const result2 = burger.classList.toggle("__active-icon");
})