// After ECMAScript 6 (ES6) 'var' was used the most:

let b = 'let b outside the block';
// let b = 30; This will cause error because 'let' cannot be redeclared but 'var' can be redeclared.
b = 30; // But this is allowed.

{
    let b = 'let B in block';
    console.log(b);
}
console.log(b);

// First of all the 'b' within brackets will be executed.

// Output:
/*  let B in block
    let b outside the block
*/