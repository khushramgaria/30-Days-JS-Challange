// Arithmetic Operators Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

function arithmeticOperators(a, b) {
    console.log("Addition: ", a + b)
    console.log("Subtraction: ", a - b)
    console.log("Multiplication: ", a * b)
    console.log("Division: ", a / b)
    console.log("Remainder: ", a % b)
}

arithmeticOperators(17, 6)

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

function func(a, b) {
    if (!((a === 10 && b === 10) || a > b)) {
        console.log("Hello World !!")
    } else {
        console.log("Null From world !!")
    }
}

func(10, 10)
func(20, 10)
func(10, 20)

// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the results.

function ternaryOperator(num) {
    let val
    if ( num === 0 ) {
        val = console.log("Zero is neither positive nor negative !!")
    } else {
        val = num > 0 ? console.log("Number is Positive !!") : console.log("Number is Negative")
    }
    return val
}

ternaryOperator(-10)