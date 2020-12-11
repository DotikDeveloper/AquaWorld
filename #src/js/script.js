'use strict';

import scrollTo from './modules/scroll-to';
import date from './modules/date';
import dateOffer from './modules/dateOffer';
import analisesDescr from './modules/analisesDescr';
import modalOpen from './modules/modal';

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
        modalOpen();
    } catch (error) {
        console.log(error);
    }

    try {
        analisesDescr();
    } catch (error) {
        console.log(error);
    }

});