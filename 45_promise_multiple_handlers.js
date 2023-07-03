// Promise Multiple Handlers:

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is Promise 1');
        resolve(1);
    }, 2000);
});

p1.then(() => {
    console.log('Hurray this is 1st Handler');
});

p1.then((value) => {
    console.log('This promise is now resolved ', value);
});