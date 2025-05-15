// ***************************** Number ******************************* //

const score = 90
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const newNumber = 29.0204
console.log(newNumber.toPrecision(2));

const value = 100000
console.log(value.toLocaleString('en-IN'));

// ******************************* Maths ************************************* //

console.log(Math);
console.log(Math.abs(-4)); // posititve to negative & positive value is not change 
console.log(Math.round(4.6)); // choose rounded smaller and bigger number
console.log(Math.ceil(4.2)); // choose top number 
console.log(Math.floor(4.9)); // choose lowest number 
console.log(Math.min(2,9,29,18)); // find lowest value
console.log(Math.max(2,9,29,18)); // find highest value
console.log(Math.random()); // generate random value between 0 or 1 
console.log(Math.random() * 10); // generate two random values between 0 to 10
console.log(Math.random() * 10 + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);











