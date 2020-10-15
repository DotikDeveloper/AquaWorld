'use strict';

// получение данных из формы

let formData = new FormData(form);


// валидация емаила
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2.8})+$/.test(input.value);
}

// отправка формы

    let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
    });