'use strict';

import scrollTo from './modules/scroll-to';
import date from './modules/date';
import dateOffer from './modules/dateOffer';
import calc from './modules/calc';


window.addEventListener("DOMContentLoaded", () => {


    try {
        scrollTo('a.scroll-to');
    } catch (error) {
        console.log(error);
    }

    try {
        date('.footer__date');        
    } catch (error) {
        console.log(error);
    }

    try {
        dateOffer('[data-toggle=dataOffer]');        
    } catch (error) {
        console.log(error);
    }

    try {
        calc();
    } catch (error) {
        console.log(error);
    }




});