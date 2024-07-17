// Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(a, b = 3) {
    return console.log("Product of two numbers: ", a * b)
}

product(4)
product(4, 4)

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return console.log("Hi " + name + ", it's great that now you are " + age )
}

greet("Alice")
greet("Alice", 20)