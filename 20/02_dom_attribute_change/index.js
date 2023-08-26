const birdImage = document.querySelector('.bird-image');
const jsLink = document.querySelector('.js-link');
const textInput = document.querySelector('.text-input');

// 1. Classic
console.log(textInput.getAttribute('hidden-message'));
textInput.setAttribute('hidden-message', 'น่าเกลียด');

// 2. Modern
console.log(textInput.dataset.hiddenMessage);
textInput.dataset.hiddenMessage = 'น่าเกลียด';