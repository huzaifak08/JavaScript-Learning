// Map in arrays: returns value.

let arr = [7, 5, 8, 3, 5, 4, 2];

// Map takes (value,index,array) and creates a new array.
arr.map((value) => {
    console.log(value)

});

// Method 2:

let a = arr.map((value) => {
    return value; // you need to return something to a the variable a if you are initializing a.
});

console.log(a);

// Method 3:

let b = arr.map((value, index, array) => {
    console.log(`The element at index ${index} is ${value} in the array ${array} `);

    return value * value + index; // this will be assgned to variable b.
});

console.log(b);