// Question 1: Load script using promises, using .then handler.

const loadScript = async (src) => {

    return new Promise((resolve, reject) => {

        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src);
        }
        document.head.append(script);
    })
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js").then((value) => {
    console.log(value);
});

// Question 2: now using async/await.
const main2 = async () => {
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");

    console.log(a);
}

main2();

// Question 3: Reject a promise and catch the error.
let function1 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject(new Error('This is an Error'));
        }, 3000);

    });

}

let function2 = async () => {

    try {
        let a = await function1();
        console.log(a);
    } catch (error) {
        console.log(error.message);
    }

}

function2();

// Question 4: Compare the time of parallel and individual scheduling using async/await.
let pFunction1 = async () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Promise 1')
        }, 1000);

    });

}

let pFunction2 = async () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Promise 2')
        }, 2000);

    });

}

let pFunction3 = async () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Promise 3')
        }, 3000);

    });

}

// One by One:
const run = async () => {

    console.time('run');

    let p1 = await pFunction1();
    let p2 = await pFunction2();
    let p3 = await pFunction3();
    console.log(p1, p2, p3);

    console.timeEnd('run'); // 6 msec

}

// Using Promise.all:
const mainFunc = async () => {

    console.time('run')

    let promise_all = await Promise.all([pFunction1(), pFunction2(), pFunction3()])
    console.log(promise_all); // Don't use .then if promises are wrap in functions like in our case.

    console.timeEnd('run'); // 3 msec

}

run(); // One by One
mainFunc(); // Promise.all

// Hence proved that parallel scheduling take less time than individual scheduling.