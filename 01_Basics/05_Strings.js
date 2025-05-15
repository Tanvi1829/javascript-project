const name = "Tanvi"
const count = 50

// console.log(name + count + " Value "); // outdated method


console.log(`Hello my name is ${name} and I want ${count}Rs.`); //unique method 

const gameName = new String("tan-vi")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   Tanvi   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://tanvi.com/tanvi%20mapuskar"
console.log(url.replace('%20', '-'));
console.log(url.includes('tanvi'));

console.log(gameName.split('-'));










