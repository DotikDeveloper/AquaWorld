'use strict';

import scrollTo from './modules/scroll-to';
import date from './modules/date';
import calc from './modules/calc';


window.addEventListener("DOMContentLoaded", () => {

    scrollTo('a.scroll-to');
    date('.footer__date');
    calc();

});