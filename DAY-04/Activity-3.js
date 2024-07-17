// Do While loop

// Task 5: Write a program to print numbers from 1 to 5 using a do while loop

let i = 1

do {
    console.log(i)
    i++
} while(i <= 5)

// Task 6: Write a program to calculate the factorial of a number using do while loop

i = 1
let num = 6
let fac = 1

do {
    fac = fac * i
    i++
} while( i <= num)

console.log("Factorial of " + num + " is " + fac)