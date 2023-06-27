// Arrays: Arrays are mutable(Changeable)

let marks = [65, 70, 75, 80, 95, null, false, undefined];

// Find the value from index:
console.log(marks[1]);

// Add a new value to array:
marks[8] = 'Huzaifa';

// Modify any value of array:
marks[0] = 69;

console.log(marks);

console.log(`The length of marks array is: ${marks.length}`); // Length doesn't start from 0.

console.log(typeof marks);

// Print all values of array using for loop:

// Method 1:
for (let i = 0; i <= marks.length; i++) {
    console.log(marks[i]);
}

// Method 2:
for (i in marks) {
    console.log(marks[i]);
}