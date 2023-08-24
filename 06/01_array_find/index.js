let scores = [82, 75, 48, 64, 36];
let failedScores = scores.find((score) => {
    return score < 50;
});

console.log(failedScores);