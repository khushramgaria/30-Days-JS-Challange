// Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2640

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Year is a leap year")
} else {
    console.log("Year is not a leap year")
}