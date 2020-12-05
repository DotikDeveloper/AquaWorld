'use strict';

function calc() {

    const btnChangeScheme = document.querySelector('[data-form=btnChangeScheme]'),
        sendScheme = document.querySelector('#sendScheme'),
        calcFormPart1 = document.querySelector('.calc__form--part1'),
        calcFormPart2 = document.querySelector('.calc__form--part2'),
        calcForm = document.querySelector('.calc__form'),
        modalBody = document.querySelector('#basicExampleModal'),
        modalBtnClose = document.querySelectorAll('[data-form=btnClose]'),
        userName = document.querySelector('[data-form=userName]'),
        schemeTitle = document.querySelector('[data-form=schemeTitle]'),
        schemeImg = document.querySelector('[data-form=schemeImg]'),
        tableBlockOneTitle = document.querySelector('[data-form=tableBlockOneTitle]'),
        tableBlockOneText = document.querySelector('[data-form=tableBlockOneText]'),
        tableBlockOneImg = document.querySelector('[data-form=tableBlockOneImg]'),
        tableBlockTwoTitle = document.querySelector('[data-form=tableBlockTwoTitle]'),
        tableBlockTwoText = document.querySelector('[data-form=tableBlockTwoText]'),
        tableBlockTwoImg = document.querySelector('[data-form=tableBlockTwoImg]'),
        tableBlockThirdBlock = document.querySelector('[data-form=tableBlockThirdBlock]'),
        tableBlockThirdTitle = document.querySelector('[data-form=tableBlockThirdTitle]'),
        tableBlockThirdText = document.querySelector('[data-form=tableBlockThirdText]'),
        tableBlockThirdImg = document.querySelector('[data-form=tableBlockThirdImg]'),
        tableBlockFourTitle = document.querySelector('[data-form=tableBlockFourTitle]'),
        tableBlockFourText = document.querySelector('[data-form=tableBlockFourText]'),
        tableBlockFourImg = document.querySelector('[data-form=tableBlockFourImg]');


        modalBtnClose.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.location.href = "/";
                // window.location.reload();
            });
        });

    // получение данных от формы
    function getData(selector) {

        const elements = document.querySelectorAll(selector);
        let result = [];

        elements.forEach(elem => {
            if (elem.selected) {
                result.push(elem.value);
            }
        });

        const resultKeys = result.join('');

        switch (resultKeys) {
            case '1114111111':
                console.log('Схема 1');
                schemeTitle.textContent = 'СХЕМА 1. Установка умягчения';
                schemeImg.src = '../media/offer/scheme-1/1.png';
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                    <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                    <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                    <p class="text-muted"></p>Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                    грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                    <p class="text-muted"></p>В качестве фильтрующего элемента используются диски из полимеров, на
                    поверхности которых имеются канавки определенной ширины и глубины. </p>
                    <p class="text-muted"></p>При сжатии дисков между ними появляется объемная сетчатая структура,
                    являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                    частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                    давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                    дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                    </p>
                `;
                tableBlockOneImg.src = '../media/offer/filter.png';
                tableBlockTwoTitle.textContent = 'Установка умягчения';
                tableBlockTwoText.innerHTML = `
                    <p class="text-muted">Ионообменная загрузка создана для комплексного решения задач в системах
                    водоподготовки и предназначена для удаления солей жесткости, а так же предотвращает образование
                    накипи в котлах, бойлерах, стиральных и посудомоечных машинах и другой бытовой техники, что
                    продлевают срок службы всей без исключения техники. Обеспечивает комфорт водных процедур,
                    экономию моющих средств и электроэнергии. Данная загрузка состоит из нескольких ионообменных
                    смол разного гранулометрического состава позволяющих эффективно удалять из исходной воды соли
                    жесткости (Ca2+ и Mg2+)</p>
                    <p class="text-muted">В качестве фильтрующей среды используются ионообменные смолы, обладающие
                        следующими свойствами;</p>
                    <ul class="text-muted">
                        <li class="list-item offer__list-item">высокие скорости потока при насыщении и регенерации;</li>
                        <li class="list-item offer__list-item">низкий расход воды на отмывку - до 150-200л;</li>
                        <li class="list-item offer__list-item">равномерное распределение реагентов, воды и растворов;
                        </li>
                        <li class="list-item offer__list-item"> однородная рабочая зона;</li>
                    </ul>
                    <p class="text-muted">Срок службы загрузки до 4-6 лет.
                    </p>
                `;
                tableBlockTwoImg.src = '../media/offer/iron.png';
                // tableBlockThirdBlock.innerHTML = '';
                // tableBlockThirdTitle.textContent = '';
                // tableBlockThirdText.innerHTML = '';
                // tableBlockThirdImg.src = '../media/offer/filter.png';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                    <p class="text-muted">Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.</p>     
                `;
                tableBlockFourImg.src = '../media/offer/smell.png';
                break;
            case '1113221111':
                console.log('Схема 2');
                break;
            case '2211221111':
                console.log('Схема 3');
                break;
            case '2214221111':
                console.log('Схема 4');
                break;
            case '2212222111':
                console.log('Схема 5');
                break;
            case '2213221112':
                console.log('Схема 6');
                break;
            case '2213222121':
                console.log('Схема 7');
                break;
            case '2221221211':
                console.log('Схема 8');
                break;
            case '2321111111':
                console.log('Схема 9');
                break;
            case '2224221211':
                console.log('Схема 10');
                break;
            case '':
                console.log('начало архива');
                break;
            default:
                modalBody.innerHTML = `
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Требуются уточнения данных</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>По вашим данным требуется индивидуальный расчет. Оставьте контактные данные и наш менеджер свяжется с вами.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
                `;
                console.log('По вашим данным требуется индивидуальный расчет. Оставьте контактные данные и наш менеджер свяжется с вами.');
                break;
        }

    }


    function setData(formSelector) {

        let formData = new FormData(formSelector);
        console.log(formData);

    }

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
        setData('.calc__form');

        const userMail = 'test@test.com';

        calcForm.innerHTML = `<h3>Расчет отправлен на указанную вами почту: ${userMail}</h3>`;

    });

    //func getData

    //------------------------calc-end---------------------//
}

export default calc;