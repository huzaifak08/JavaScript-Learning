// Promise Chaining: Initializing new promise in the handler.

let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Promise 1 of 2 sec');
        resolve(56);
    }, 2000);

});

p1.then((value) => {
    console.log(value);

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2');
        }, 2000);
    })
    return p2;

}).then((value) => {    // then of p2:
    console.log('We are done Allhamdullillah' + value) // value is "Promise 2" here.

    return 2    // Now its just value 2 and javascript will consider it as a promise.

}).then(() => { // then of "return 2"
    console.log('We are done');
});

// In this way promise chaining will help us to resolve the issue of callback hell.