// Do while Loop:

let n = prompt('Enter the number: ');
n = Number.parseInt(n);

let i = 10;
do {
    console.log(i);
    i++;
} while (i < n); // Although condition is false but still atleast one time it will be executed.