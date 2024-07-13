// Variable Types Console Log: This task requires you to write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const num = 7
const name = "Khush"
const bool = false
const obj = {
    name: "Khush",
    age: 20,
    gender: "male"
}
const arr = [ 1, 2, 3]

function variablesTypesConsoleLog(value, variable) {
    console.log(`The value is '${value}' and type is '${typeof(value)}' of variable '${variable}'`)
}

variablesTypesConsoleLog(num, "num")
variablesTypesConsoleLog(name, "name")
variablesTypesConsoleLog(bool, "bool")
variablesTypesConsoleLog(obj, "obj")
variablesTypesConsoleLog(arr, "arr")


// Reassignment Demo: For this, you need to create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let fullName1 = "Khush"

const fullName2 = "Jaggi"

console.log("Full Name before reassigning value to let variable: ", fullName1)

console.log("Full Name before reassigning value to const variable: ", fullName2)

try {
    fullName1 = "Khushpreet Singh"
    console.log("Full Name after reassigning value to let variable:", fullName1)
} catch (error) {
    console.log("Error while reassigning value to let variable. ", error)
}

try {
    fullName2 = "Jagjeet Singh"
    console.log("Full Name after reassigning value to const variable:", fullName2)
} catch (error) {
    console.log("Error while reassigning value to const variable. ", error)
}