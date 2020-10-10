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

const btnChangeScheme = document.querySelector()



    //------------------------calc-end---------------------//

    // 

});