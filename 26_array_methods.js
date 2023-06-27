// Array Methods:

let num = [1, 2, 3, 4, 5];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [45, 76, 23, 98, 56, 74, 56, 88]

// toString:
let b = num.toString();
console.log(b, typeof b);

// Join:
let c = num.join('_');
console.log(c);

// Pop:
let d = num.pop(); // returned the pop element (5) (end Element)
console.log(d); // This will modify the orignal num array.

// Push:
let e = num.push(34);
console.log(e);

// Shift:
let f = num.shift(); // Remove array element from begining.
console.log(f);

// Unshift:
let g = num.unshift(33); // Add element to the begining of array.
console.log(g, num);

// Delete:
delete num[0];  // Output: [ <1 empty item>, 2, 3, 4, 5 ]
console.log(num, num.length); // still the length will be 5.

// Concat:
let newArray = num.concat(num2);
console.log(newArray);

// Sort:
num3.sort() // Modify the orignal array and also its sort alphabetically.
console.log(num3);

// For sorting in ascending or descending order:
let compare = (a, b) => {
    return a - b;
}

num3.sort(compare);
console.log(num3);

// Reverse:
num.reverse()
console.log(num);

// Splice:
num3.splice(2, 3, 1021, 1022, 1023); // modify orignal array.
// Start from index 2 and delete 3 elements and replace 1021, 1022, 1023.
console.log(num3);

// Slice:
let x = num.slice(3); // index 3 to onward.
let y = num3.slice(2, 5); // From index 2 to 5.
console.log(x, y);

