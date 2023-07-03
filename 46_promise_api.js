// Promise API: 6 APIs

let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise 1');
    }, 11000);

});

let p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve('Promise 2');
        reject(new Error('Error'));
    }, 2000);

});

let p3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise 3');
    }, 3000);

});

p1.then((value) => {
    console.log(value)
});

p2.then((value) => {
    console.log(value)
});

p3.then((value) => {
    console.log(value)
});

// Promise.all API:
let promise_all = Promise.all([p1, p2, p3]) // After 3 sec all promises will be resolve and then will move to .then handler.

// Limitation: If any promise get rejected in 'Promise.all' then no promise will be executed.

promise_all.then((value) => {
    console.log(value);
})

// To overcome this limitation we use 'Promise.allSettled'.

// Promise.race API:
let promise_setteled = Promise.allSettled([p1, p2, p3]);

promise_setteled.then((value) => {
    console.log(value);
});

// Promise.race API: The promise which execute first will be shown only.
let promise_race = Promise.race([p1, p2, p3]);

promise_race.then((value) => {
    console.log(value);
})

// Limitataion: If the promise that executed first got rejected then also it will display that promise only.

// Promise.only API: To get only the first resolved promise(value) (Limitation Overcome).
let promise_any = Promise.any([p1, p2, p3]);

promise_any.then((value) => {
    console.log(value);
});

// Promise.resolve API:
let promise_resolve = Promise.resolve(6);

promise_resolve.then((value) => {
    console.log(value);
});

// Promise.reject API:

// let promise_reject = Promise.reject(6);
let promise_reject = Promise.reject(new Error('Error'));

promise_reject.then((value) => {
    console.log(value);
});