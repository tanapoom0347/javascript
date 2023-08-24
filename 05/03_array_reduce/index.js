let scores = [82, 75, 48, 64, 36];
let sumScores = scores.reduce((sum, score) => {
    return sum + score;
});

console.log(scores);
console.log(sumScores);