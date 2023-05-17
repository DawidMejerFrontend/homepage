console.log("Witam Dev'ów :D");

let switchSideButton = document.querySelector(".js-header__switchSideButton");
let picture = document.querySelector(".header__image");
let article = document.querySelector(".section__article");
let articles = document.querySelectorAll(".section__article");
let naviButton = document.querySelector(".js-navi__button");
let naviButtons = document.querySelectorAll(".js-navi__button");
let footer = document.querySelector(".footer");
let footerLink = document.querySelector(".footer__link");
let tableRow = document.querySelector(".table__tableRow");
let tableRows = document.querySelectorAll(".table__tableRow");
let pictureDarkSide = document.querySelector(".header__image--darkSide");

let characterSection = document.querySelector(".section--characters");
let tableSection = document.querySelector(".section--table");

switchSideButton.addEventListener("click", () => {
    picture.classList.toggle("header__image--darkSide");
    switchSideButton.classList.toggle("header__switchSideButton--darkSide");
    footer.classList.toggle("footer--darkSide");
    footerLink.classList.toggle("footer__link--darkSide");
    pictureDarkSide.classList.toggle("header__image--darkSideSwitch");
    characterSection.classList.toggle("characters--darkSide");
    tableSection.classList.toggle("section--darkSide");
    

    for (let naviButton of naviButtons) {
        naviButton.classList.toggle("js.navi__button--darkSide");
        naviButton.classList.toggle("js-navi__button--darkSide")
    }

    for (let tableRow of tableRows) {
        tableRow.classList.toggle("table__tableRow--darkSide");
    }

    for (let article of articles) {
        article.classList.toggle("section__article--darkSide");
    }

    if (switchSideButton.innerText === "Przejdź na ciemną stronę mocy") {
        switchSideButton.innerText = "Przejdź na jasną stronę mocy";
    } else {
        switchSideButton.innerText = "Przejdź na ciemną stronę mocy";
    }   
});

