let scores = [82, 75, 48, 64, 36];
let someonePassed = scores.some((score) => {
    return score >= 50;
});

console.log(someonePassed);