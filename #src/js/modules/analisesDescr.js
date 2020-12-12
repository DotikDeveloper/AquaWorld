function analisesDescr () {
    const btn = document.querySelectorAll('.modal__link'),
        btnClose = document.querySelectorAll('[data-modal=close]'),
        modalBody = document.querySelector('[data-modal=body]'),
        modalContent = document.querySelector('[data-modal=content]'),
        modalAnalysisTitle = document.querySelector('[data-modal=analysis-modal-title]'),
        modalAnalysisText = document.querySelector('[data-modal=analysis-modal-content]');

        btn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let key = e.target.dataset.modal;
                modalBody.style.visibility = 'visible';
                modalContent.style.marginTop = '50px';
               

                switch (key) {
                    case 'instruction':
                    modalAnalysisTitle.textContent = 'Инструкция по забору воды';
                    modalAnalysisText.innerHTML = `
                    <p><strong>Как самостоятельно взять воду на анализ</strong></p>
                    <ol>
                        <li>Купите чистую бутылку объёмом 1,5 л</li>
                        <li>Откройте источник с водой, подождите около минуты, чтобы застоявшаяся вода слилась.</li>
                        <li>Наберите бутылку водой полностью.</li>
                        <li>Крепко закупорьте бутылку крышкой.</li>
                        <li>Позвоните по номеру <a href="tel:+79171033310">+7 (917) 103-33-10<a> и предупредите менеджера о приезде.</li>
                    </ol>
                    <p><strong>Обратите внимание</strong></p>
                    <ul>
                        <li>В случае, если вы не сможете привезти воду в день забор, допускается хранение воды в холодильнике в течение 2 дней.</li>
                    </ul>
                    `;
                        break;
                    case 'simple':
                    modalAnalysisTitle.textContent = 'Анализ «Сокращённый»';
                    modalAnalysisText.innerHTML = `
                    <p><strong>Включает 5 обязательных загрязнителей, которые встречаются в питьевой воде:</strong></p>
                    <ul>
                        <li>сухой остаток;</li>
                        <li>водородный показатель;</li>
                        <li>мутность;</li>
                        <li>жёсткость;</li>
                        <li>железо</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong></p>
                    <ul>
                        <li>Не подходит для воды, применяемой в питьевых целях.</li>
                        <li>Не подходит для корректного подбора/оценки работы фильтров.</li>
                    </ul>
                    `;
                        break;
                    case 'hard':
                    modalAnalysisTitle.textContent = 'Анализ «Расширенный»';
                    modalAnalysisText.innerHTML = `
                        <p><strong>Предназначен для обнаружения наиболее часто встречающихся вредных веществ в питьевой воде и включает 19 параметров:</strong></p>
                        <ul>    
                        <li>Запах</li>
                        <li>Цветность</li>
                        <li>Мутность</li>
                        <li>Водородный показатель</li>
                        <li>Перманганатная окисляемость О2</li>
                        <li>Сухой остаток</li>
                        <li>Щелочность (СО3)</li>
                        <li>Общая щелочность (НСО3)</li>
                        <li>Хлориды (Cl)</li>
                        <li>Сульфаты (SO4)</li>
                        <li>Кальций (Ca)</li>
                        <li>Магний (Mg)</li>
                        <li>K+Na по разности</li>
                        <li>Общая жёсткость</li>
                        <li>Общее железо (Fe)</li>
                        <li>Ионы аммония (NH4)</li>
                        <li>Нитрит-ионы (NO2)</li>
                        <li>Нитрат-ионы (NO3)</li>
                        <li>Марганец (Mn)</li>
                        </ul>
                        <p><strong>Обратите внимание:</strong></p>
                        <ul>
                        <li>Позволяет корректно подобрать и настроить водоочистное оборудование.</li>
                        </ul>
                        
                    `;
                        break;
                
                    default:
                    console.log('click - default');
                        break;
                }

            });
        });

        btnClose.forEach(btnClose => {
            btnClose.addEventListener('click', () => {
                modalBody.style.visibility = 'hidden';
                modalContent.style.marginTop = '-1000px';
            });            
        });
}

export default analisesDescr();