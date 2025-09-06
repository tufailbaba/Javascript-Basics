const myArr = [1, 2, 3, 4, 5 ];
const myHeros = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr);
console.log(myHeros[2]);
console.log(myArr2[4]);

//Arrays methods
myArr.push(6);
console.log(myArr);
myArr.pop();
myArr.unshift(9);

console.log(myArr.includes(8));
console.log(myArr.indexOf(12));

console.log(myArr.reverse());
console.log(myArr.sort());
//slice,splice

console.log("B",myArr);

const myn1 = myArr.slice(1,4);
console.log(myn1);
console.log("A",myArr);





