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

    //func getData

    function getData(selector) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {

            if (elem.selected || elem.className === 'calc__input') {
                // console.log(elem.parentNode.id, elem.value);

                // turbidity
                // chromaticity
                // smell
                // rigidity
                // iron
                // manganese
                // permanganate
                // hydrogen
                // ammonium
                // nitrates

                switch (elem.parentNode.id) {
                    case 'ph':
                    case 'mineralization':
                    case 'residents':
                    case 'peak':
                        console.log(elem.parentNode.id, elem.value);
                        break;
                    case 'turbidity':
                        console.log(elem.parentNode.id, elem.value);
                        break;



                }

            }

        });
    }
    // changeScheme

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
        getData('.calc__form--part2 .calc__input');
        getData('.calc__form--part2 .calc__option');

        const userMail = 'test@test.com';

        calcForm.innerHTML = `<h3>Расчет отправлен на указанную вами почту: ${userMail}</h3>`;

    });

    //func getData



    //------------------------calc-end---------------------//

    // 

});