// Conditional Statements:
let a = prompt('Hey whats your age?'); // Bydefault the value will be a String.
a = Number.parseInt(a);  // TypeCasting to Number.

console.log(typeof a);

if (a > 18) {
    alert('You can drive a Car now!'); // Alert is use to show alert dialog in brower.
}

else if (a < 18) {
    alert('You cannot Drive now!');
}

else {
    alert('Enter Number is Misleading!');
}