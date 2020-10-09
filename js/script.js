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

    const calcSubmit = document.querySelector('#calcSubmit'),
        turbidity = document.querySelector('#turbidity').value,
        chromaticity = document.querySelector('#chromaticity').value,
        smell = document.querySelector('#smell').value,
        rigidity = document.querySelector('#rigidity').value,
        iron = document.querySelector('#iron').value,
        manganese = document.querySelector('#manganese').value,
        permanganate = document.querySelector('#permanganate').value,
        hydrogen = document.querySelector('#hydrogen').value,
        ph = document.querySelector('#ph').value,
        mineralization = document.querySelector('#mineralization').value,
        ammonium = document.querySelector('#ammonium').value,
        nitrates = document.querySelector('#nitrates').value,
        residents = document.querySelector('#residents').value,
        points = document.querySelector('#points').value,
        peak = document.querySelector('#peak').value,
        name = document.querySelector('#name').value,
        email = document.querySelector('#email').value,
        tel = document.querySelector('#tel').value;
        
        
    calcSubmit.addEventListener('click', () => {
        console.log('вызов формы');

        

    });



    //------------------------calc-end---------------------//

    // 

});