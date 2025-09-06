const marvel_heroes = ["Tufail", "Ali", "Hassan", "Hussain"];
const dc_heros = ["Khan", "Khalid", "Owais", "Hamza"];

marvel_heroes.push(dc_heros);
console.log(marvel_heroes[2]);

const allHeroes = marvel_heroes.concat(dc_heros);
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heros];
console.log(all_new_heroes);

const numbers = [1, 2, 3, [4, 5, 6], 7, 8, [1, 2, [3, 4]]];
const real_another_array = numbers.flat(Infinity);

console.log(real_another_array);

let score1 = 50;
let score2 = 60;
let score3 = 70;

console.log(Array.of(score1, score2, score3));

