// Filter in arrays: returns an array.

let arr = [7, 5, 8, 3, 5, 4, 2];

arr.filter((value) => {
    console.log(value < 5); //returns Boolean.
});

// Method 2:

let a = arr.filter((value) => {
    return value < 5;
});

console.log(a); // This will return the array with values less than 5;