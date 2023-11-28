'use strict'

try {
    const registerButton = document.querySelector('.webinar-main-button');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalCloserElements = document.querySelectorAll('[data-modal-close]');
    const form = document.querySelector('.form');

    registerButton.addEventListener('click', () => {
        modalBackdrop.classList.add('modal-backdrop--open');
    });

    function closeModal() {
        modalBackdrop.classList.remove('modal-backdrop--open');
    }

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
        }
    })

    modalCloserElements.forEach(element => {
        element.addEventListener('click', e => {
            if (e.target.hasAttribute('data-modal-close')) {
                closeModal();
            }
        })
    });
} catch (e) {

}