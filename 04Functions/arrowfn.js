const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 4));

const square = num => num * num;

console.log(square(5));

const giveMeFive = () => 5;

console.log(giveMeFive());

const logo = message => console.log(message);

logo("Hello from arrow function!");

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(doMath(7, 3));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);