function dateOffer(selector) {
    const date = new Date();
    const month = date.getMonth() + 1; //months from 1-12
    const day = date.getDate();
    const year = date.getFullYear();
    let dateForOffer;

    if (day < 10) {
        dateForOffer = 'от ' + '0' + day + "/" + month + "/" + year;
    } else {
        dateForOffer = 'от ' + day + "/" + month + "/" + year;
    }

    document.querySelector(selector).innerHTML = dateForOffer;

}

export default dateOffer;