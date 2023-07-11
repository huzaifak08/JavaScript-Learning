// Question 1:

const a = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    })
}

(
    async () => {
        let print = await a('Hello');
        console.log(print);
        let print2 = await a('World');
        console.log(print2);
    }
)()

// Question 2:
let arr = [5, 10, 15, 20];

average = (v1, v2, v3, v4) => {
    return (v1 + v2 + v3 + v4) / 4;
}

console.log(average(...arr));

// Question 3:
const myFunc = (text, n = 2) => { // Default value of n is 2.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000 * n);
    });
};

(
    async () => {
        let print3 = await myFunc('Hy everyone', 2);
        console.log(print3);
    }
)()

// Question 4:
simpleInterest = (p, r, t) => {
    return (p * r * t) / 100;
};

console.log(simpleInterest(1000, 5, 1));