// Add, edit, delete
// const characters = [
//     { name: 'ปูนิ่ม',range: 'malee' },
//     { name: 'ช้างยิ้ม',range: 'range' },
//     { name: 'เหนือฟ้า',range: 'malee' }
// ];

// const editIndex = 1;
// const newName = 'แสงเหนือ';
// const newCharacters = characters.filter((character, index) => {
//     return index !== editIndex;
// });

// console.log(characters);
// console.log(newCharacters);

// Sort
let scores = [73, 53, 68, 80];
// let sortedScores = [...scores].sort();
// let sortedScores = [...scores].sort((score1, score2) => {
//     if (score1 > score2) {
//         return 1;
//     }
//     else if (score1 < score2) {
//         return -1;
//     }
//     return 0;
// });
let sortedScores = [...scores].sort((score1, score2) => {
    if (score1 > score2) {
        return -1;
    }
    else if (score1 < score2) {
        return 1;
    }
    return 0;
});

console.log(scores);
console.log(sortedScores);