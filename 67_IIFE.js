// IIFE: Immediately Invoked Function Expression:

// Not to pollute global namespace.

// Instead of using async/await in a function and then calling this function, IIFE remove that calling function.

let a = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 2000);
    });

}

// using IIFE instead of normal function:
(async () => {
    let b = await a()
    console.log(b);

    let c = await a()
    console.log(c);
})()