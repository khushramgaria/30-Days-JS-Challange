// Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

const a = 22
const b = 15
const c = 22

if (a > b) { // 10 > 5
    if (a > c) { // 10 > 15
        console.log("a is largest number")
    } else { // 5 > 15
        console.log("c is largest number")
    }
}  else if (b > c) {
    console.log("b is largest")   
} else {
    console.log("c is largest number")
}
