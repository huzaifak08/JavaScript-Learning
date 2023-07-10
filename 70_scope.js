// Global Scope:
{
    var a = 27; // if variable is outside the block then also it has global scope.
}

console.log(a); // 27 --> Global Scope

// Block Scope:
{
    let b = 30;
    console.log(b); // 30 --> Block level Scope
}

// console.log(b); // This will cause error because let has block level scope.

// Function Scope:

ax = () => {
    let c = 8;
    console.log(c);
}
ax(); // 8

// console.log(c); // This will cause error.