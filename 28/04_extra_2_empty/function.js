// Arrow function super short version
// const cuteMessage = message => '^.^ ' + message + ' ^.^';

// console.log(cuteMessage('หนาวจนปวดฉี่'));

// const numbers = [1, 2, 3, 4];
// const doubleNumbers = numbers.map(number => number * 2);

// console.log(numbers);
// console.log(doubleNumbers);




// Function with default parameters
function showMessage(message = 'ฮาย', count = 1) {
    for (let i = 1; i <= count; i++) {
        console.log(i + '. ' + message);
    }
}

showMessage();
showMessage('น่ารัก', 5);