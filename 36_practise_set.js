// Question 1:
let age = prompt('Enter your age?');
age = Number.parseInt(age);

if (age >= 18) {
    alert('You can Drive')
} else {
    alert('You cannot drive')
}

// Question 2:
let myConfirm = confirm('You want to see this prompt again?');

if (myConfirm) {
    alert('You will be able to see this prompt again...');
} else {
    alert('You will not be able to see this prompt again...');
}

// Question 3:

if (age >= 18) {
    alert('You can Drive')
} else if (age > 0 && age < 18) {
    alert('You cannot drive')
} else if (age < 0) {
    console.error('Age cannot be negative')
}

// Question 4:
let num = prompt('Enter your Number?');
num = Number.parseInt(num);

if (num > 4) {
    location.href = 'https://www.google.com'
}

// Question 5:
let color = prompt('Enter your color.');
document.body.style.background = color