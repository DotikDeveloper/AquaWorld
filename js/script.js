"use strict";

window.addEventListener("DOMContentLoaded", function () {

    //------------------------scroll-----------------------//

    const anchors = document.querySelectorAll('a.scroll-to');

    for (const anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    //------------------------scroll-end---------------------//

    //------------------------calc-------------------------//

    const btnChangeScheme = document.querySelector('#btnChangeScheme'),
        sendScheme = document.querySelector('#sendScheme'),
        calcFormPart1 = document.querySelector('.calc__form--part1'),
        calcFormPart2 = document.querySelector('.calc__form--part2'),
        calcForm = document.querySelector('.calc__form');

    // получение данных от формы
    function getData(selector) {
        const elements = document.querySelectorAll(selector);
        let result = [];

        elements.forEach(elem => {
            if (elem.selected) {
                result.push(elem.value);
            }
        });

        const resultKeys = result.join('');

        switch (resultKeys) {
            case '1114111111':
                console.log('Схема 1');
                break;
            case '1113221111':
                console.log('Схема 2');
                break;
            case '2211221111':
                console.log('Схема 3');
                break;
            case '2214221111':
                console.log('Схема 4');
                break;
            case '2212222111':
                console.log('Схема 5');
                break;
            case '2213221112':
                console.log('Схема 6');
                break;
            case '2213222121':
                console.log('Схема 7');
                break;
            case '2221221211':
                console.log('Схема 8');
                break;
            case '2321111111':
                console.log('Схема 9');
                break;
            case '2224221211':
                console.log('Схема 10');
                break;
            case '':
                console.log('начало архива');
                break;
            default:
                console.log('По вашим данным требуется индивидуальный расчет. Оставьте контактные данные и наш менеджер свяжется с вами.');
                break;
        }

    }

    function setData(formSelector) {
       
        let formData = new FormData(formSelector);
        console.log(formData);

    }

    btnChangeScheme.addEventListener('click', () => {
        calcFormPart2.classList.remove('hide');
        calcFormPart1.classList.add('hide');
        // getData(selector);
        getData('.calc__form--part1 .calc__input');
        getData('.calc__form--part1 .calc__option');
    });

    //send offer
    sendScheme.addEventListener('click', () => {
        calcFormPart2.classList.add('hide');

        // getData(selector);
        setData('.calc__form');

        const userMail = 'test@test.com';

        calcForm.innerHTML = `<h3>Расчет отправлен на указанную вами почту: ${userMail}</h3>`;

    });

    //func getData



    //------------------------calc-end---------------------//

    // 

});