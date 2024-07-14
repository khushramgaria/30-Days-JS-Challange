// Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

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