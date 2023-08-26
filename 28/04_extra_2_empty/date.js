const dateNow = new Date();
// console.log(dateNow);

const birthday = new Date(1994, 4, 26, 8, 30);
// console.log(birthday);

const setEgg = new Date('1995-02-14');
console.log(setEgg);

if (birthday < setEgg) {
    console.log('คนจริง 2023');
}