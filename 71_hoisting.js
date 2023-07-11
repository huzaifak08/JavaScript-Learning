/* Hoisting: refers to the process where the interpreter appears
to move the decleration to the top of the code before execution. */

greet(); // This will not cause any error

function greet() {
    console.log('Good morning');
}

// JS only host Decleration not Initialization.

// Example 2:

console.log(a); // Decleration --> Undefined because 'a' is not defined untill here.

var a = 12; // Initialization 

console.log(a); // 12

// Example 3: 'let' and 'var' acts Differently

console.log(b); // This will cause error becuse 'let' need to initialize first.
let b = 8;

// Example 4: Function expressions are not hoisting.

const greeting = function greet() { // Not support.
    console.log('Good morning');
}

var greeting2 = function greet() { // Not support.
    console.log('Good morning');
}