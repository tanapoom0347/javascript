let message = document.querySelector('.message');
let spoilButton = document.querySelector('.spoil-button');

spoilButton.addEventListener('click', () => {
    // Show/Hide message
    if (message.style.display === 'none') {
        message.style.display = 'block';
    }
    else {
        message.style.display = 'none';
    }
});