// Add, edit, delete
const characters = [
    { name: 'ปูนิ่ม',range: 'malee' },
    { name: 'ช้างยิ้ม',range: 'range' },
    { name: 'เหนือฟ้า',range: 'malee' }
];

const newCharacter = { name: 'แสงเหนือ', range: 'range' };
const newCharacters = [...characters, newCharacter];

console.log(characters);
console.log(newCharacters);