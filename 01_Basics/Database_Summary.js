// Database Summary

/* 
    Important Notes:
        - Categorization of data is in two ways: 
            - Primitive datatype(call by value)
            - Non-Primitive datatype(referance)(call by referance)
        
        - Primitive DataTypes(Call By Value): 
            - string
            - number
            - boolean
            - null
            - undefined 
            - symbol
            - BigInt

        - Non-Primitive DataTypes(Referance)(Call By Referance):
            - array
            - objects
            - functions

*/

// Primitive datatypes(Call by Value)

const score = 100 // number
const scoreValue = 100.1 // number
let name = "Tanvi" // string
const isLoggedIn = false // boolean
const temp = null // null
let user; // undefined
const id = Symbol('123') // symbol
const bigNumber = 1234567891011121n // bigint
console.table([score, scoreValue, name, isLoggedIn, temp, user, id, bigNumber]);


// Non-Primitive DataTypes(Call by Referance)

const cars = ["tigor", "breeza", "tiago"] // array
let mySelf = {
    name: "Tanvi",
    age: "22"
} // object
const myFunction = function(){
    console.log("Learning JavaScript");
} // function

console.log(typeof cars);

