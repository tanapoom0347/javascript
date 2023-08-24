let body = document.body;
let themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', () => {
    //Change theme
    body.classList.toggle('dark-theme');
});