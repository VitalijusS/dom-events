const inputDOM = document.querySelector('input');
const countDOM = document.querySelector('.count');

inputDOM.addEventListener('keyup', () => {
    countDOM.textContent = inputDOM.value.length;
});
