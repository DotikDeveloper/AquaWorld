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
        userEmail = document.querySelector('[data-form=userEmail]'),
        schemeTitle = document.querySelectorAll('[data-form=schemeTitle]'),
        schemeImg = document.querySelectorAll('[data-form=schemeImg]'),
        tableBlockOneTitle = document.querySelectorAll('[data-form=tableBlockOneTitle]'),
        tableBlockOneText = document.querySelectorAll('[data-form=tableBlockOneText]'),
        tableBlockOneImg = document.querySelectorAll('[data-form=tableBlockOneImg]'),
        tableBlockTwoTitle = document.querySelectorAll('[data-form=tableBlockTwoTitle]'),
        tableBlockTwoText = document.querySelectorAll('[data-form=tableBlockTwoText]'),
        tableBlockTwoImg = document.querySelectorAll('[data-form=tableBlockTwoImg]'),
        tableBlockThirdBlock = document.querySelectorAll('[data-form=tableBlockThirdBlock]'),
        tableBlockThirdTitle = document.querySelectorAll('[data-form=tableBlockThirdTitle]'),
        tableBlockThirdText = document.querySelectorAll('[data-form=tableBlockThirdText]'),
        tableBlockThirdImg = document.querySelectorAll('[data-form=tableBlockThirdImg]'),
        tableBlockFiveBlock = document.querySelectorAll('[data-form=tableBlockFiveBlock]'),
        tableBlockFiveTitle = document.querySelectorAll('[data-form=tableBlockFiveTitle]'),
        tableBlockFiveText = document.querySelectorAll('[data-form=tableBlockFiveText]'),
        tableBlockFiveImg = document.querySelectorAll('[data-form=tableBlockFiveImg]'),
        tableBlockFourTitle = document.querySelectorAll('[data-form=tableBlockFourTitle]'),
        tableBlockFourText = document.querySelectorAll('[data-form=tableBlockFourText]'),
        tableBlockFourImg = document.querySelectorAll('[data-form=tableBlockFourImg]');

    let schemeNumber;
    let points = document.querySelector('#points');
    let offerNumber;

    // перезагрузка страницы при закрытии модального окна
    modalBtnClose.forEach((btn) => {
        btn.addEventListener('click', () => {
            window.location.reload();
        });
    });

    // определение прайса

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
                schemeNumber = '1';
                console.log(schemeNumber);
                schemeTitle.forEach((t) => {
                    t.textContent = 'СХЕМА 1. Установка умягчения';
                });
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-1/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
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
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '1113221111':
                schemeNumber = 2;
                console.log('Схема 2');
                schemeTitle.textContent = 'СХЕМА 2. Фильтр для удаления железа и жесткости';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-2/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Фильтр для удаления железа и жесткости';
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
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2211221111':
                schemeNumber = 3;
                console.log('Схема 3');
                schemeTitle.textContent = 'СХЕМА 3. Комплекс обезжелезивания и осветления';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-3/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
                tableBlockTwoText.innerHTML = `
                       <p class="text-muted">Фильтр ускоряет процесс окисления железа и задерживает его окисленные соединения в слое фильтрующего материала.  Фильтр работает в автоматическом режиме. В качестве  фильтрующего материала используется Экоферокс и МСФерокс.  Промывка фильтра осуществляется  обратным током исходной водой.</p>
                       <p class="text-muted">ЭКОФЕРОКС действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III), в результате чего образуется гидрооксид железа (III), который является нерастворимым соединением и легко удаляется обратным током воды.</p>                   
                       <p class="text-muted">«MSFerox» действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III) валентного, в результате реакции образуется гидроксид железа (III), который является не растворимым соединением и легко удаляется обратным током воды. Сероводород и марганец также окисляются и оседают в слоях фильтрующего материала, с последующим удалением обратным током воды. «MSFerox» не требует для регенерации применение реагентов. Необходима своевременная периодическая промывка водой или для более эффективной промывки - водо-воздушная.</p>
                   `;
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2214221111':
                schemeNumber = 4;
                console.log('Схема 4');
                schemeTitle.textContent = 'СХЕМА 4. Обезжелезивание + Умягчение';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-4/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
                tableBlockTwoText.innerHTML = `
                       <p class="text-muted">Фильтр ускоряет процесс окисления железа и задерживает его окисленные соединения в слое фильтрующего материала.  Фильтр работает в автоматическом режиме. В качестве  фильтрующего материала используется Экоферокс и МСФерокс.  Промывка фильтра осуществляется  обратным током исходной водой.</p>
                       <p class="text-muted">ЭКОФЕРОКС действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III), в результате чего образуется гидрооксид железа (III), который является нерастворимым соединением и легко удаляется обратным током воды.</p>                   
                       <p class="text-muted">«MSFerox» действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III) валентного, в результате реакции образуется гидроксид железа (III), который является не растворимым соединением и легко удаляется обратным током воды. Сероводород и марганец также окисляются и оседают в слоях фильтрующего материала, с последующим удалением обратным током воды. «MSFerox» не требует для регенерации применение реагентов. Необходима своевременная периодическая промывка водой или для более эффективной промывки - водо-воздушная.</p>
                   `;
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                // tableBlockThirdBlock.style.display = 'block';  
                tableBlockThirdTitle.textContent = 'Фильтр для удаления жесткости';
                tableBlockThirdText.innerHTML = `
                   <p class="text-muted">Фильтр ускоряет процесс окисления железа и задерживает его окисленные соединения в слое фильтрующего материала.  Фильтр работает в автоматическом режиме. В качестве  фильтрующего материала используется Экоферокс и МСФерокс.  Промывка фильтра осуществляется  обратным током исходной водой.</p>
                   <p class="text-muted">ЭКОФЕРОКС действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III), в результате чего образуется гидрооксид железа (III), который является нерастворимым соединением и легко удаляется обратным током воды.</p>                   
                   <p class="text-muted">«MSFerox» действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III) валентного, в результате реакции образуется гидроксид железа (III), который является не растворимым соединением и легко удаляется обратным током воды. Сероводород и марганец также окисляются и оседают в слоях фильтрующего материала, с последующим удалением обратным током воды. «MSFerox» не требует для регенерации применение реагентов. Необходима своевременная периодическая промывка водой или для более эффективной промывки - водо-воздушная.</p>
               `;
                tableBlockThirdImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2212222111':
                schemeNumber = 5;
                console.log('Схема 5');
                schemeTitle.textContent = 'СХЕМА 5. Удаление железа, жесткости и ПМО';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-5/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости и перманганатной окисляемости (ПМО)';
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
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2213221112':
                schemeNumber = 6;
                console.log('Схема 6');
                schemeTitle.textContent = 'СХЕМА 6. Фильтр для удаления железа, жесткости и нитратов';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-6/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости и нитратов';
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
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2213222121':
                schemeNumber = 7;
                console.log('Схема 7');
                schemeTitle.textContent = 'СХЕМА 7. Фильтр для удаления железа, жесткости, аммония и ПМО';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-7/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости, аммония и ПМО';
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
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2221221211':
                schemeNumber = 8;
                console.log('Схема 8');
                schemeTitle.textContent = 'СХЕМА 8. Обезжелезивание + Сероводород + Запах';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-8/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Установка аэрации';
                tableBlockTwoText.innerHTML = `
                       <p class="text-muted">Аэрация основана на принципе принудительной подачи воздуха в аэрационную колонну с водой. Аэрационные колонны используются зачастую в схемах водоочистки с небольшой производительностью. С помощью   компрессора производится нагнетание воздуха. Таким образом, происходит насыщение воды кислородом и окисление железа и марганца. </p>
                   `;
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/aero.png">
                   `;
                // tableBlockThirdBlock.style.display = 'block';  
                tableBlockThirdTitle.textContent = 'Комплекс  обезжелезивания и осветления';
                tableBlockThirdText.innerHTML = `
                   <p class="text-muted">Фильтр ускоряет процесс окисления железа и задерживает его окисленные соединения в слое фильтрующего материала.  Фильтр работает в автоматическом режиме. В качестве  фильтрующего материала используется Экоферокс и МСФерокс.  Промывка фильтра осуществляется  обратным током исходной водой.</p>
                   <p class="text-muted">ЭКОФЕРОКС действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III), в результате чего образуется гидрооксид железа (III), который является нерастворимым соединением и легко удаляется обратным током воды.</p>                   
                   <p class="text-muted">«MSFerox» действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III) валентного, в результате реакции образуется гидроксид железа (III), который является не растворимым соединением и легко удаляется обратным током воды. Сероводород и марганец также окисляются и оседают в слоях фильтрующего материала, с последующим удалением обратным током воды. «MSFerox» не требует для регенерации применение реагентов. Необходима своевременная периодическая промывка водой или для более эффективной промывки - водо-воздушная.</p>
               `;
                tableBlockThirdImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2321111111':
                schemeNumber = 9;
                console.log('Схема 9');
                schemeTitle.textContent = 'СХЕМА 9. Осветление (Мутность + Цветность)';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-9/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной грязеемкостью по сравнению с сетчатыми фильтрами.</p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.</p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
                tableBlockTwoText.innerHTML = `
                       <p class="text-muted">Автоматические угольные фильтры серии служат для дехлорирования воды, удаления посторонних запахов, цветности, органики, хлорорганических производных и других вредных загрязнений. Активированный уголь имеет большую удельную поверхность и является эффективным сорбентом, который поглощает из воды и задерживает в фильтрующей среде растворенные примеси и органику, удаляет неприятный запах и улучшает вкус воды. Кроме того, активированный уголь обладает каталитическими свойствами и способен очищать воду от свободного хлора -дехлорировать.  При этом загрузка фильтра не расходуется, а также не требуется дозирования химических реагентов в процессе эксплуатации.</p>
                   `;
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                tableBlockThirdBlock.style.display = 'none';
                tableBlockThirdTitle.style.display = 'none';
                tableBlockThirdText.style.display = 'none';
                tableBlockThirdImg.style.display = 'none';
                tableBlockFiveBlock.style.display = 'none';
                tableBlockFiveTitle.style.display = 'none';
                tableBlockFiveText.style.display = 'none';
                tableBlockFiveImg.style.display = 'none';
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
                break;
            case '2224221211':
                schemeNumber = 10;
                console.log('Схема 10');
                schemeTitle.textContent = 'СХЕМА 10. Аэрация (Сероводород) + Обезжелезивание + Умягчение';
                schemeImg.innerHTML = `
                   <img src="../media/offer/scheme-10/1.png" alt="Схема" class="img-fluid">
                   `;
                schemeImg.alt = schemeTitle;
                tableBlockOneTitle.textContent = 'Фильтр механический';
                tableBlockOneText.innerHTML = `
                       <p class="text-muted font-weight-bold">Фильтр CEPEX LF 1" (130мкм)</p>
                       <p class="text-muted">Тонкость очистки (мкм) 130 </p>
                       <p class="text-muted">Дисковые фильтры CEPEX обладают высокой производительностью и повышенной
                       грязеемкостью по сравнению с сетчатыми фильтрами. </p>
                       <p class="text-muted">В качестве фильтрующего элемента используются диски из полимеров, на
                       поверхности которых имеются канавки определенной ширины и глубины. </p>
                       <p class="text-muted">При сжатии дисков между ними появляется объемная сетчатая структура,
                       являющаяся рабочим фильтрующим элементом. Вода проходит через плотно сжатые диски, а нерастворенные
                       частицы остаются в междисковом пространстве. Для того чтобы промыть дисковый фильтр, нужно сбросить
                       давление в магистрали, затем снять кожух фильтра и достать фильтрующий элемент, при этом пакет
                       дисков разожмется. В разжатом состоянии диски легко промываются водой под незначительным напором.
                       </p>
                   `;
                tableBlockOneImg.innerHTML = `
                   <img src="../media/offer/filter.png">
                   `;
                tableBlockTwoTitle.textContent = 'Установка аэрации';
                tableBlockTwoText.innerHTML = `
                       <p class="text-muted">Аэрация основана на принципе принудительной подачи воздуха в аэрационную колонну с водой. Аэрационные колонны используются зачастую в схемах водоочистки с небольшой производительностью. С помощью   компрессора производится нагнетание воздуха. Таким образом, происходит насыщение воды кислородом и окисление железа и марганца. </p>
                   `;
                tableBlockTwoImg.innerHTML = `
                   <img src="../media/offer/aero.png">
                   `;
                // tableBlockThirdBlock.style.display = 'block';  
                tableBlockThirdTitle.textContent = 'Комплекс  обезжелезивания и осветления';
                tableBlockThirdText.innerHTML = `
                   <p class="text-muted">Фильтр ускоряет процесс окисления железа и задерживает его окисленные соединения в слое фильтрующего материала.  Фильтр работает в автоматическом режиме. В качестве  фильтрующего материала используется Экоферокс и МСФерокс.  Промывка фильтра осуществляется  обратным током исходной водой.</p>
                   <p class="text-muted">ЭКОФЕРОКС действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III), в результате чего образуется гидрооксид железа (III), который является нерастворимым соединением и легко удаляется обратным током воды.</p>                   
                   <p class="text-muted">«MSFerox» действует как катализатор окисления в реакциях взаимодействия растворенного кислорода с соединениями железа (II) и (III) валентного, в результате реакции образуется гидроксид железа (III), который является не растворимым соединением и легко удаляется обратным током воды. Сероводород и марганец также окисляются и оседают в слоях фильтрующего материала, с последующим удалением обратным током воды. «MSFerox» не требует для регенерации применение реагентов. Необходима своевременная периодическая промывка водой или для более эффективной промывки - водо-воздушная.</p>
               `;
                tableBlockThirdImg.innerHTML = `
                   <img src="../media/offer/color.png">
                   `;
                // tableBlockFiveBlock.style.display = 'block';  
                tableBlockFiveTitle.textContent = 'Установка умягчения';
                tableBlockFiveText.innerHTML = `
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
                tableBlockFiveImg.innerHTML = `
                   <img src="../media/offer/iron.png">
                   `;
                tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
                tableBlockFourText.innerHTML = `
                       <p class="text-muted">
                       Удаляет из воды бытового назначения неприятный запах и цвет, а также хлор, хлорорганические соединения и другие агрессивные вещества.
                       </p>     
                   `;
                tableBlockFourImg.innerHTML = `
                   <img src="../media/offer/smell.png">
                   `;
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

                setTimeout(() => {
                    window.location.reload();
                }, 3000);

                console.log('По вашим данным требуется индивидуальный расчет. Оставьте контактные данные и наш менеджер свяжется с вами.');
                break;
        }
    }

    function setData(formSelector) {
        // let formData = new FormData(formSelector);        
        console.log('schemeNumber ', schemeNumber);
        console.log('points ', points);
        offerNumber = schemeNumber + Number(points.selectedIndex + 1);
        console.log('offerNumber ', offerNumber);
        console.log(schemeImg);
    }

    btnChangeScheme.addEventListener('click', () => {
        calcFormPart2.classList.remove('hide');
        calcFormPart1.classList.add('hide');
        getData('.calc__form--part1 .calc__input');
        getData('.calc__form--part1 .calc__option');
    });

    //send offer
    sendScheme.addEventListener('click', 
        async () => {
          await getData('.calc__form--part1 .calc__input');
          await getData('.calc__form--part1 .calc__option');

        calcFormPart2.classList.add('hide');
        setData('.calc__form');
        calcForm.innerHTML = `
            <h3 class="text-success">${userName.value} расчет отправлен на указанную вами почту ${userEmail.value}*</h3>
            <p class="text-danger">*иногда письма попадают в спам</p>        
        `;
    });

    //func getData

    //------------------------calc-end---------------------//
}

export default calc;