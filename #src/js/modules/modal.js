function modalOpen() {
    const modal = document.getElementById('exampleModal');
    const modalBtn = document.getElementById('modalOpen');
    const modalBtnClose = document.querySelectorAll('[data-dismiss=modal]');
    let div = document.createElement('div');
    const view = document.querySelector('.modal-backdrop.fade');
    console.log(modal);

    setTimeout(() => {
        modal.style = "padding-right: 19px; display: block;";
        modal.classList.add('show');
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        div.classList.add('modal-backdrop', 'fade', 'show');
        document.body.append(div);   
    }, 3000);

    modalBtnClose.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style = null;
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('aria-modal', 'true');
            modal.removeAttribute('role', 'dialog');
            div.classList.add('modal-backdrop', 'fade', 'show');
            div.remove();        
        });
    });    




}

export default modalOpen;