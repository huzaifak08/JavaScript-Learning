// Question 1:

const marks = {
    Maths: 98,
    Physics: 34,
    Chemistry: 33,
    Computer: 100
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log('Marks in ' + Object.keys(marks)[i] + ' are ' + Object.values(marks)[i]);
}


// Question 2:
for (let i in marks) {
    console.log('Marks in ' + i + ' are ' + marks[i]);
}

// Question 3:
let num = 4;
let i;
while (i != num) {
    i = prompt('Enter a number');
}

console.log('You have Entered right Number...')

// Question 4:

const mean = (a, b, c) => {
    return (a + b + c) / 3;
}

console.log('Mean of 3 numbers is: ' + mean(1, 2, 3));