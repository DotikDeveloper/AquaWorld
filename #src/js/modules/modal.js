function modalOpen() {
    const modal = document.getElementById('exampleModal');
    const modalBtnClose = document.querySelector('[data-dismiss=modal]');
    let div = document.createElement('div');

    setTimeout(() => {
        modal.style = "padding-right: 5px; display: block;";
        modal.classList.add('show');
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        div.classList.add('modal-backdrop', 'fade', 'show');
        document.body.append(div);   
    }, 3000);

    modalBtnClose.addEventListener('click', () => {
            modal.style = null;
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('aria-modal', 'true');
            modal.removeAttribute('role', 'dialog');
            div.classList.add('modal-backdrop', 'fade', 'show');
            div.remove();        
        });   

    
}

export default modalOpen;