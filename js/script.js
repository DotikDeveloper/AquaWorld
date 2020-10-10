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

        btnChangeScheme.addEventListener('click', () => {
            calcFormPart2.classList.remove('hide');
            calcFormPart1.classList.add('hide');
        });

        sendScheme.addEventListener('click', () => {
            calcFormPart2.classList.add('hide');
            // calcFormPart1.classList.remove('hide');
            calcForm.innerHTML = '<h3>Расчет отправлен на указанную вами почту: ${user.mail}</h3>' ;
        });


    //------------------------calc-end---------------------//

    // 

});