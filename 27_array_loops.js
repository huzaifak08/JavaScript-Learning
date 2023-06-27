// Loops in Array:

let num = [4, 3, 5, 8, 7, 10, 6, 9];

for (let i = 0; i < num.length; i++) {
    console.log(`The Element at index ${i} is ${num[i]}`);
}

// Print the square of each element:

num.forEach((element) => {
    console.log('The Square of element is: ', element * element);
});

// Array.from:
let fname = 'Huzaifa';
let arr = Array.from(fname);
console.log(arr);

// For of Loop for arrays:

for (let i of num) {
    console.log(i);
}

// For in Loop for arrays:

for (let i in num) {
    console.log(i);
}