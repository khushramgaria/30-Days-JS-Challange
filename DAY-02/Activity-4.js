// Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console

function andOperator(a, b) {
    if( a >= b && a == 20) {
        console.log("And Operator works")
    } else {
        console.log(null)
    }
}

andOperator(10, 5)
andOperator(20, 10)

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console

function orOperator(a, b) {
    if( a >= b || a == 20) {
        console.log("Or Operator works")
    } else {
        console.log(null)
    }
}

orOperator(10, 5)
orOperator(20, 10)

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console

function notOperator(a, b) {
    if( a !== b ) {
        console.log("Not Operator works")
    } else {
        console.log(null)
    }
}

notOperator(10, 10)
notOperator(20, 10)