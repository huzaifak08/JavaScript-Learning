// Question 1:
let myAge = 22;

if (myAge >= 10 && myAge <= 20) {
    console.log('Age is between 10 and 20');
} else {
    console.log('Age is not between 10 and 20');
}

// Question 2:
let age = prompt('What is your age');
age = Number.parseInt(age);

switch (age) {
    case 12:
        alert('You cannot Drive yet.');
        break;

    case 13:
        alert('You can Drive Now.');
        break;

    default:
        alert('Your age is not clear.')
}

// Question 3:
let num = prompt('Enter a Number');
num = Number.parseInt(num);

if (num % 3 == 0 && num % 5 == 0) {
    console.log(num, 'Number is divisible by 3 and 5');
} else {
    console.log(num, 'Number is not divisible by 3 and 5');
}

// Question 4:
let num2 = prompt('Enter a Number');
num2 = Number.parseInt(num2);

if (num2 % 3 == 0 && num2 % 5 == 0) {
    console.log(num2, 'Number is divisible by 3 and 5');
} else if (num2 % 3 == 0 || num2 % 5 == 0) {
    console.log(num2, 'Number is divisible by 3 or 5');
}
else {
    console.log(num2, 'Number is not divisible by 3 and 5');
}