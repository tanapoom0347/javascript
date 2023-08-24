let scores = [82, 75, 48, 64, 36];
let passScores = scores.filter((score) => {
    return score >= 50;
});

console.log(scores);
console.log(passScores);