const select = document.querySelector('#select');
const options = document.querySelector('#options');
const select__content = document.querySelector('#select .select__content');
const hiddenInput = document.querySelector('#input-select');

document.querySelectorAll('#options > .option').forEach((option) =>{
    option.addEventListener('click', (e) => {
        e.preventDefault();
        select__content.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.text').innerText;
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});