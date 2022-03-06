"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPod|iPad/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
        }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__link-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}
else {
    document.body.classList.add('_pc');
    
    let menuArrows = document.querySelectorAll('.menu__link-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows1 = document.querySelectorAll('.menu__sub-title1');
    let menuArrows2 = document.querySelectorAll('.menu__sub-title2');
    let menuArrows3 = document.querySelectorAll('.menu__sub-title3');
    let menuArrows4 = document.querySelectorAll('.menu__sub-title4');
    if (menuArrows1.length > 0) {
        for (let index = 0; index < menuArrows1.length; index++) {
            const menuArrow = menuArrows1[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows2.length > 0) {
        for (let index = 0; index < menuArrows2.length; index++) {
            const menuArrow = menuArrows2[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows3.length > 0) {
        for (let index = 0; index < menuArrows3.length; index++) {
            const menuArrow = menuArrows3[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows4.length > 0) {
        for (let index = 0; index < menuArrows4.length; index++) {
            const menuArrow = menuArrows4[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}
else {
    document.body.classList.add('_pc');
    
    let menuArrows1 = document.querySelectorAll('.menu__sub-title1');
    let menuArrows2 = document.querySelectorAll('.menu__sub-title2');
    let menuArrows3 = document.querySelectorAll('.menu__sub-title3');
    let menuArrows4 = document.querySelectorAll('.menu__sub-title4');
    if (menuArrows1.length > 0) {
        for (let index = 0; index < menuArrows1.length; index++) {
            const menuArrow = menuArrows1[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows2.length > 0) {
        for (let index = 0; index < menuArrows2.length; index++) {
            const menuArrow = menuArrows2[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows3.length > 0) {
        for (let index = 0; index < menuArrows3.length; index++) {
            const menuArrow = menuArrows3[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    if (menuArrows4.length > 0) {
        for (let index = 0; index < menuArrows4.length; index++) {
            const menuArrow = menuArrows4[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}

const iconMenu = document.querySelector ('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector ('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}