const cardButton = document.querySelector('#card-button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');
cardButton.addEventListener('click', (event) => {
    modal.style.display = 'flex'
})
close.addEventListener('click', (event) => {
    modal.style.display = 'none';
})

