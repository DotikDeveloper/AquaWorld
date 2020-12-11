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