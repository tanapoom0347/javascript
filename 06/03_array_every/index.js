let scores = [82, 75, 48, 64, 36];
let everyonePassed = scores.every((score) => {
    return score >= 50;
});

console.log(everyonePassed);