// Data Types 

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator

// number
const num = 7

console.log("Value of num: ", num)
console.log("Type of num: ", typeof(num))

// string
const name = "JS Challange"

console.log("Value of name: ", name)
console.log("Type of name: ", typeof(name))

// boolean
const bool = false

console.log("Value of bool: ", bool)
console.log("Type of bool: ", typeof(bool))

// object
const obj = {
    name: "Khushpreet Singh",
    age: 20,
    qualification: "BCA Graduated",
}

console.log("Value of obj: ", obj)
console.log("Value of specific obj value: ", obj.qualification)
console.log("Type of obj: ", typeof(obj))

// array
const arr = [ 7, "JS Challange", false, {
    name: "Khushpreet Singh",
    age: 20,
    qualification: "BCA Graduated",
}]

console.log("Value of arr: ", arr)
console.log("Value of specific arr value : ", arr[3].name)
console.log("Type of arr: ", typeof(arr))
