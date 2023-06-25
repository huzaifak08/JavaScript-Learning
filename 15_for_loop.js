// For Loop:

let sum = 0;

let n = prompt("Enter number: ");
n = Number.parseInt(n);

for (let i = 0; i <= n; i++) {
    sum = sum + (i + 1);
}

console.log('Sum of first', n, ' natural numbers is: ', sum);