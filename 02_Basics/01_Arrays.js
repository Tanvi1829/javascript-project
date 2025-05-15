// array

const values = [1,2,3,4,5]
const students = ["Tanvi", "Omkar", "Vaishnavi"]
const valueArray = new Array(1,2,3,4)
console.log(valueArray[0]);

// array method

values.push(8) // add new value 
values.pop() // remove last value
values.unshift(8) // new value insert into the 1st 
values.shift() 
console.log(values.includes(8)) // include method check the value is included or not if included then return true & if not included then return false
console.log(values.indexOf(4)) // indexOf method is find the value of index 

const employee = students.join() // convert array into string 

console.log(students);
console.log(typeof employee);


// slice and splice 

    /* 
        Important Notes:
            - slice: 
                - return section of an array
                - return a shallow copy of portion of an array 
                
            - splice: 
                - remove existing element and add new element into the place 
    */

console.log("A", values);

const clgStudents = values.slice(1, 3)

console.log(clgStudents);
console.log("B", values);

const clgStudents1 = values.splice(1, 3)
console.log("C", values);
console.log(clgStudents1)



