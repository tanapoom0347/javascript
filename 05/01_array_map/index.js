let scores = [82, 75, 48, 64, 36];
let passFailScores = scores.map((score) => {
    if (score >= 50) {
        return 'passed';
    }
    return 'failed';
});

console.log(scores);
console.log(passFailScores);