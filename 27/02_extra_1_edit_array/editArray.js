// Add, edit, delete
const characters = [
    { name: 'ปูนิ่ม',range: 'malee' },
    { name: 'ช้างยิ้ม',range: 'range' },
    { name: 'เหนือฟ้า',range: 'malee' }
];

const editIndex = 1;
const newName = 'แสงเหนือ';
const newCharacters = characters.map((character, index) => {
    if (index !== editIndex) {
        return character;
    }
    const editCharacter = { ...character };
    editCharacter.name = newName;
    return editCharacter;
});

console.log(characters);
console.log(newCharacters);