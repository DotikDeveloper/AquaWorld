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

    const optionData = document.querySelectorAll('.calc__option'),
        inputData = document.querySelectorAll('.calc__input'),
        userMail = document.querySelector('#email').value;

    //func getData

    function getInputData(selector) {
        selector.forEach(data => {
            console.log(data.id, +data.value);
        });
    }

    function getOptionData(selector) {
        selector.forEach(data => {
            if (data.selected === true) {
                console.log(data.parentNode.id, +data.value);
            }
        });
    }

    btnChangeScheme.addEventListener('click', () => {
        calcFormPart2.classList.remove('hide');
        calcFormPart1.classList.add('hide');

        getOptionData(optionData);
        getInputData(inputData);
    });





    //send offer
    sendScheme.addEventListener('click', () => {
        calcFormPart2.classList.add('hide');

        getOptionData(optionData);
        getInputData(inputData);

        calcForm.innerHTML = `<h3>Расчет отправлен на указанную вами почту: ${userMail}</h3>`;

    });

    //func getData



    //------------------------calc-end---------------------//

    // 

});