'use strict';

function calc() {

       const btnChangeScheme = document.querySelector('[data-form=btnChangeScheme]'),
              sendScheme = document.querySelector('#sendScheme'),
              calcFormPart1 = document.querySelector('.calc__form--part1'),
              calcFormPart2 = document.querySelector('.calc__form--part2'),
              calcForm = document.querySelector('.calc__form'),
              offerBlock = document.querySelector('[data-content=offerBlock]'),
              offerPrice = document.querySelector('[data-content=offerPrice]'),
              offerDescription = document.querySelector('[data-content=offerDescription]'),
              modalBody = document.querySelector('#basicExampleModal'),
              modalBtnClose = document.querySelectorAll('[data-form=btnClose]'),
              userName = document.querySelector('[data-form=userName]'),
              userEmail = document.querySelector('[data-form=userEmail]'),
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
              tableBlockFiveBlock = document.querySelector('[data-form=tableBlockFiveBlock]'),
              tableBlockFiveTitle = document.querySelector('[data-form=tableBlockFiveTitle]'),
              tableBlockFiveText = document.querySelector('[data-form=tableBlockFiveText]'),
              tableBlockFiveImg = document.querySelector('[data-form=tableBlockFiveImg]'),
              tableBlockFourTitle = document.querySelector('[data-form=tableBlockFourTitle]'),
              tableBlockFourText = document.querySelector('[data-form=tableBlockFourText]'),
              tableBlockFourImg = document.querySelector('[data-form=tableBlockFourImg]'),
              bodyItemPrice = document.querySelector('[data-price=bodyItemPrice]'),
              sumLowPriceItemPrice = document.querySelector('[data-price=sumLowPriceItemPrice]'),
              sumHightPriceItemPrice = document.querySelector('[data-price=sumHightPriceItemPrice]');

       // создание счетчика схемы
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
                            schemeTitle.textContent = 'СХЕМА 1. Установка умягчения';
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

       btnChangeScheme.addEventListener('click', () => {
              // offerPrice.classList.add('hide');
              calcFormPart2.classList.remove('hide');
              calcFormPart1.classList.add('hide');
              getData('.calc__form--part1 .calc__input');
              getData('.calc__form--part1 .calc__option');
       });

       

       console.log('sumLowPriceItemPrice pre', sumLowPriceItemPrice.innerText);
       console.log('sumHightPriceItemPrice pre', sumHightPriceItemPrice.innerText);

       // создаем класс прайса
       class PriceLine {
              constructor(numberItem, nameItem, unitsItem, volumeItem, lowPriceItem, highPriceItem) {
                     this.numberItem = numberItem;
                     this.nameItem = nameItem;
                     this.unitsItem = unitsItem;
                     this.volumeItem = volumeItem;
                     this.lowPriceItem = lowPriceItem;
                     this.highPriceItem = highPriceItem;
              }

              render() {
                     const element = document.createElement('tr');
                     element.innerHTML = `
                                   <th scope="row">${this.numberItem}</th>
                                   <td>${this.nameItem}</td>
                                   <td>${this.unitsItem}</td>
                                   <td>${this.volumeItem}</td>
                                   <td>${this.lowPriceItem}</td>
                                   <td>${this.highPriceItem}</td>
                     `;
                     bodyItemPrice.prepend(element);
                                          
                     let sumLowPrice = +(sumLowPriceItemPrice.innerText) + +(this.lowPriceItem);
                     let sumHightPrice = +(sumHightPriceItemPrice.innerText) + +(this.highPriceItem);

                     sumLowPriceItemPrice.textContent = sumLowPrice;
                     sumHightPriceItemPrice.textContent = sumHightPrice;
              }              
       }

       function getPrice() { // собираем прайс
              offerNumber = String(schemeNumber) + Number(points.selectedIndex + 1);
              console.log('offerNumber ', offerNumber);

              switch (offerNumber) {
                     //схема 1
                     case '14':
                            console.log('price 14');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '47250',
                                   '66750',
                            ).render(); 
                     break;
                     case '13':
                            console.log('price 13');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '41250',
                                   '60750',
                            ).render(); 
                     break;
                     case '12':
                            console.log('price 12');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '34875',
                                   '54000',
                            ).render(); 
                     break;
                     case '11':
                            console.log('price 11');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '28125',
                                   '49500',
                            ).render(); 
                     break;
                     
                     //схема 2  
                     case '24':
                            console.log('price 24');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и жесткости 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '55500',
                                   '75000',
                            ).render(); 
                     break;  
                     case '23':
                            console.log('price 23');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и жесткости 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '48750',
                                   '67500',
                            ).render(); 
                     break;
                     case '22':
                            console.log('price 22');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и жесткости 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '40500',
                                   '59250',
                            ).render(); 
                     break;
                     case '21':
                            console.log('price 21');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и жесткости 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '52875',
                            ).render(); 
                     break;
                                          
                     //схема 3  
                     case '34':
                            console.log('price 34');
                            new PriceLine(
                                   '3',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1665 в сборе',
                                   'шт.',
                                   '1',
                                   '36375',
                                   '54750',
                            ).render(); 
                     break;
                     case '33':
                            console.log('price 33');
                            new PriceLine(
                                   '3',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1465 в сборе',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '50250',
                            ).render(); 
                     break;
                     case '32':
                            console.log('price 32');
                            new PriceLine(
                                   '3',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '24750',
                                   '41250',
                            ).render(); 
                     break;
                     case '31':
                            console.log('price 31');
                            new PriceLine(
                                   '3',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '52875',
                            ).render(); 
                     break;
                     
                     //схема 4                       
                     case '44':
                            console.log('price 44');
                            new PriceLine(
                                   '5',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '47250',
                                   '66750',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1665 в сборе',
                                   'шт.',
                                   '1',
                                   '36375',
                                   '54750',
                            ).render(); 
                     break;
                     case '43':
                            console.log('price 43');
                            new PriceLine(
                                   '5',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '41250',
                                   '60750',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1465 в сборе',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '50250',
                            ).render(); 
                     break;
                     case '42':
                            console.log('price 42');
                            new PriceLine(
                                   '5',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '34875',
                                   '54000',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '24750',
                                   '41250',
                            ).render(); 
                     break;
                     case '41':
                            console.log('price 41');
                            new PriceLine(
                                   '5',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '28125',
                                   '49500',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа и марганца 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '22125',
                                   '39000',
                            ).render(); 
                     break;

                     //схема 5  
                     case '54':
                            console.log('price 54');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и ПМО 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '57000',
                                   '76500',
                            ).render(); 
                     break;  
                     case '53':
                            console.log('price 53');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и ПМО 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '49500',
                                   '69000',
                            ).render(); 
                     break;
                     case '52':
                            console.log('price 52');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и ПМО 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '41250',
                                   '60750',
                            ).render(); 
                     break;
                     case '51':
                            console.log('price 51');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и ПМО 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '32250',
                                   '53625',
                            ).render(); 
                     break;
                     
                     //схема 6  
                     case '64':
                            console.log('price 64');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и нитратов 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '61500',
                                   '81000',
                            ).render(); 
                     break;  
                     case '63':
                            console.log('price 63');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и нитратов 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '54750',
                                   '74250',
                            ).render(); 
                     break;
                     case '62':
                            console.log('price 62');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и нитратов 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '46500',
                                   '66000',
                            ).render(); 
                     break;
                     case '61':
                            console.log('price 61');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости и нитратов 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '35250',
                                   '57000',
                            ).render(); 
                     break;

                     //схема 7  
                     case '74':
                            console.log('price 64');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости, аммония и ПМО 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '64500',
                                   '84000',
                            ).render(); 
                     break;  
                     case '73':
                            console.log('price 73');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости, аммония и ПМО 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '56250',
                                   '75750',
                            ).render(); 
                     break;
                     case '72':
                            console.log('price 72');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости, аммония и ПМО 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '46500',
                                   '65625',
                            ).render(); 
                     break;
                     case '71':
                            console.log('price 71');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления железа, жесткости, аммония и ПМО 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '35250',
                                   '56625',
                            ).render(); 
                     break;
                     
                     //схема 8                       
                     case '84':
                            console.log('price 84');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа и марганца 1665 в сборе',
                                   'шт.',
                                   '1',
                                   '36375',
                                   '54750',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '81000',
                                   '81000',
                            ).render(); 
                     break;
                     case '83':
                            console.log('price 83');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа и марганца 1465 в сборе',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '50250',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '69000',
                                   '69000',
                            ).render(); 
                     break;
                     case '82':
                            console.log('price 82');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа и марганца 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '24750',
                                   '41250',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1054 в сборе',
                                   'шт.',
                                   '1',
                                   '66750',
                                   '66750',
                            ).render(); 
                     break;
                     case '81':
                            console.log('price 81');
                            new PriceLine(
                                   '4',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа и марганца 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '22125',
                                   '39000',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 0844 в сборе',
                                   'шт.',
                                   '1',
                                   '64500',
                                   '64500',
                            ).render(); 
                     break;
                     
                     //схема 9 
                     case '94':
                            console.log('price 94');
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления цветности, мутности  и хлора в сборе 1665 в сборе',
                                   'шт.',
                                   '1',
                                   '49500',
                                   '67500',
                            ).render(); 
                     break;
                     case '93':
                            console.log('price 93');
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления цветности, мутности  и хлора в сборе 1465 в сборе',
                                   'шт.',
                                   '1',
                                   '42000',
                                   '60750',
                            ).render(); 
                     break;
                     case '92':
                            console.log('price 92');
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления цветности, мутности  и хлора в сборе 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '32625',
                                   '49500',
                            ).render(); 
                     break;
                     case '91':
                            console.log('price 91');
                            new PriceLine(
                                   '2',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Фильтр для удаления цветности, мутности  и хлора в сборе 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '28500',
                                   '45750',
                            ).render(); 
                     break;
                     
                     //схема 10                       
                     case '104':
                            console.log('price 104');
                            new PriceLine(
                                   '6',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '5',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '47250',
                                   '66750',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа, марганца, цветности и мутности 1665 в сборе',
                                   'шт.',
                                   '1',
                                   '36375',
                                   '54750',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '81000',
                                   '81000',
                            ).render(); 
                     break;
                     case '103':
                            console.log('price 103');
                            new PriceLine(
                                   '6',
                                   'Фильтр угольный ВВ СР20”',
                                   'шт.',
                                   '1',
                                   '5500',
                                   '5500',
                            ).render(); 
                            new PriceLine(
                                   '5',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '41250',
                                   '60750',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа, марганца, цветности и мутности 1465 в сборе',
                                   'шт.',
                                   '1',
                                   '31500',
                                   '50250',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '69000',
                                   '69000',
                            ).render(); 
                     break;
                     case '102':
                            console.log('price 102');
                            new PriceLine(
                                   '6',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '5',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '34875',
                                   '54000',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа, марганца, цветности и мутности 1354 в сборе',
                                   'шт.',
                                   '1',
                                   '24750',
                                   '41250',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 1054 в сборе',
                                   'шт.',
                                   '1',
                                   '66750',
                                   '66750',
                            ).render(); 
                     break;
                     case '101':
                            console.log('price 101');
                            new PriceLine(
                                   '6',
                                   'Фильтр угольный ВВ СР10”',
                                   'шт.',
                                   '1',
                                   '3500',
                                   '3500',
                            ).render(); 
                            new PriceLine(
                                   '5',
                                   'Соль таблетированная (25кг)',
                                   'меш.',
                                   '1',
                                   '600',
                                   '600',
                            ).render(); 
                            new PriceLine(
                                   '4',
                                   'Фильтр CEPEX LF 1" (130мкм) (Испания)',
                                   'шт.',
                                   '1',
                                   '1400',
                                   '1400',
                            ).render(); 
                            new PriceLine(
                                   '3',
                                   'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л',
                                   'шт.',
                                   '1',
                                   '28125',
                                   '49500',
                            ).render(); 
                            new PriceLine(
                                   '2',
                                   'Фильтр для удаления железа, марганца, цветности и мутности 1252 в сборе',
                                   'шт.',
                                   '1',
                                   '22125',
                                   '39000',
                            ).render(); 
                            new PriceLine(
                                   '1',
                                   'Система напорной аэрации 0844 в сборе',
                                   'шт.',
                                   '1',
                                   '64500',
                                   '64500',
                            ).render(); 
                     break;
                     
                     default:
                            console.log('switch не сработал');
                     break;
              }
       }

       function setData() { // собираем офер
              getPrice();
              console.log('offerDescription', offerDescription); // получили первую часть офера
              console.log('offerPrice', offerPrice); // получили вторую часть офера
              console.log('offerBlock', offerBlock); // получили блок офера
       }

       //send offer
       sendScheme.addEventListener('click', () => { // отправляем офер на почту
              calcFormPart2.classList.add('hide');
              setData('.calc__form');
              calcForm.innerHTML = `
            <h3 class="text-success">${userName.value} расчет отправлен на указанную вами почту ${userEmail.value}*</h3>
            <p class="text-danger">*иногда письма попадают в спам</p>        
        `;
              //   let formData = new FormData(formSelector); 
       });

       //func getData

       //------------------------calc-end---------------------//
}

export default calc;