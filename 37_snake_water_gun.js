let user = prompt('Enter S, W or G');

let myNum = Math.floor(Math.random() * 3);
let cpu = ['S', 'W', 'G'][myNum];

const match = (user, cpu) => {
    if (cpu === user) {
        return 0;
    } else if (cpu === 'S' && user === 'W') {
        return 'You Lose';
    } else if (cpu === 'S' && user === 'G') {
        return 'You Win';
    } else if (cpu === 'W' && user === 'S') {
        return 'You Win';
    } else if (cpu === 'W' && user === 'G') {
        return 'You Lose';
    } else if (cpu === 'G' && user === 'S') {
        return 'You Lose';
    } else if (cpu === 'G' && user === 'W') {
        return 'You win';
    }
}

let myConfirm;
do {
    let result = match(user, cpu);
    alert(`User: ${user} and CPU: ${cpu}, Result : ${result}`);

    myConfirm = confirm('Do you want to play again?');
    user = prompt('Enter S, W or G');

} while (myConfirm);

alert('Permission denied');