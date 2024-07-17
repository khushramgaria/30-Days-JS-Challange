// Nested Loops

// Task 7: Write a program to print a pattern using nested for loop

let num = 5

for ( let i = 0; i <= num; i++) {
    let pattern = ""
    for( let j = 0; j < i; j++) {
        pattern += "*"
    }
    console.log(pattern)
}