const students = ["Tanvi", "Omkar", "Vaishnavi"]
const emp = ["Tanu", "Omii", "Vaishu"]

// students.push(emp)
// console.log(emp);
// console.log(students[3][1]);

const employee = students.concat(emp)
console.log(employee);

const newEmployee = [...students, ...emp]
console.log(newEmployee);

const employeeNumber = [1,2,3, [4,5,6], 7, [8,9,[10,11]]]
const empNumber = employeeNumber.flat(Infinity)

console.log(empNumber);
