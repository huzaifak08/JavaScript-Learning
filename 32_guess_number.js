// Random Number:

let num = Math.floor(Math.random() * 99);
num = Number.parseInt(num);

console.log(num);

let a;
let chances = 0;

while (chances < 100 && a != num) {
    a = prompt('Guess the Number');
    a = Number.parseInt(a);

    if (a > num) {
        console.log('You have guessed a greater number');
    } else if (a < num) {
        console.log('You have guessed a lesser number');
    }
    chances++;
}

console.log('You guessed the right number');