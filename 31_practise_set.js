// Question 1:

let arr = [12, 13, 14, 15, 16];

let num = prompt("Enter a number");
num = Number.parseInt(num);

arr.push(num);
console.log(arr);

// Question 2:

let arr2 = [12, 13, 14, 15, 16];

let num2;

do {
    num2 = prompt("Enter a number");
    num2 = Number.parseInt(num2);
    arr2.push(num2);

} while (num2 != 0);

console.log(arr2);

// Question 3:

let arr3 = [12, 13, 14, 16, 100, 200];

let a = arr3.filter((value) => {
    return value % 10 == 0;
})

console.log(a);

// Question 4:

let arr4 = [12, 13, 14, 16, 100, 200];

let b = arr4.map((value) => {
    return value * value;
});

console.log(b);

// Question 5:

let arr5 = [1, 2, 3];

let n = arr5.reduce((value1, value2) => {
    return value1 * value2;
});

console.log('The factorial is: ', n);