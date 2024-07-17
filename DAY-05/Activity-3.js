// Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => {
    return console.log("Sum of two numbers are: ", num1 + num2)
}

sum(4, 5)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const func = (str, char) => {
    return str.includes(char) ? true : false
}

console.log(func("chai", "c"))