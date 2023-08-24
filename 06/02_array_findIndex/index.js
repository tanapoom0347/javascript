let scores = [82, 75, 48, 64, 36];
let failedScores = scores.findIndex((score) => {
    return score < 50;
});

console.log(failedScores);