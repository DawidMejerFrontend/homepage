{
    const welcome = () => {
        console.log("Witam Dev'ów :D");
    }

    const switchSideButton = document.querySelector(".js-header__switchSideButton");
    const picture = document.querySelector(".js-header__image");
    const article = document.querySelector(".js-section__article");
    const articles = document.querySelectorAll(".section__article");
    const naviButton = document.querySelector(".js-navi__button");
    const naviButtons = document.querySelectorAll(".js-navi__button");
    const footer = document.querySelector(".js-footer");
    const footerLink = document.querySelector(".js-footer__link");
    const tableRow = document.querySelector(".js-table__tableRow");
    const tableRows = document.querySelectorAll(".js-table__tableRow");
    const pictureDarkSide = document.querySelector(".js-header__image--darkSide");
    const characterSection = document.querySelector(".js-section--characters");
    const tableSection = document.querySelector(".js-section--table");

    const toggleSide = () => {
        picture.classList.toggle("header__image--darkSide");
        switchSideButton.classList.toggle("header__switchSideButton--darkSide");
        footer.classList.toggle("footer--darkSide");
        footerLink.classList.toggle("footer__link--darkSide");
        pictureDarkSide.classList.toggle("header__image--darkSideSwitch");
        characterSection.classList.toggle("characters--darkSide");
        tableSection.classList.toggle("section--darkSide");

        for (const naviButton of naviButtons) {
            naviButton.classList.toggle("navi__button--darkSide");
        }

        for (const tableRow of tableRows) {
            tableRow.classList.toggle("table__tableRow--darkSide");
        }

        for (const article of articles) {
            article.classList.toggle("section__article--darkSide");
        }

        if (switchSideButton.innerText === "Przejdź na ciemną stronę mocy") {
            switchSideButton.innerText = "Przejdź na jasną stronę mocy";
        } else {
            switchSideButton.innerText = "Przejdź na ciemną stronę mocy";
        }
    };
    
    const init = () => {
        switchSideButton.addEventListener("click", toggleSide);

        welcome();
    }

    init()

};