// Reduce in arrays: returns value.

let arr = [7, 5, 8, 3, 5, 4, 2];

/* Reduce will take the two values and pass it to function and then take the result
and the third value from array and pass it to function and so on */

let a = arr.reduce((value1, value2) => {
    return value1 + value2;
});

console.log('The sum of all elements in array is: ', a); // 34

// Method 2:

const reduce_func = (value1, value2) => {
    return value1 + value2;
};

let b = arr.reduce(reduce_func);
console.log('The sum of all elements in array is: ', b); // 34
