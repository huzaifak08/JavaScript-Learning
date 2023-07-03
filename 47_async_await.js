// Async await: Async functions always return a promise.

// Example 1:
function harry() {
    return 5;
}

harry().then((value) => {
    console.log(value);
});
// Now this will throw an error because .then is use with promises, not with functions.

// But this will not throw error because async will asure that this is a promise function.
async function harry() {
    return 5;
}

harry().then((value) => {
    console.log(value);
});

// Multiple functions runs parallerly in javascript but async/await will help to slow the execution.

// Example 2:
async function weatherPak() {

    let kpkWeather = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('21 Deg');
        }, 1000);

    }); // kpkWeather

    let punjabWeather = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('32 Deg');
        }, 2000);

    }); // punjabWeather

    console.log('Fetching Kpk Weather...');
    let kpkWea = await kpkWeather;
    console.log('Kpk Weather Fetched ' + kpkWea);

    console.log('Fetching Punjab Weather...');
    let punWea = await punjabWeather;
    console.log('Punjab Weather Fetched ' + punWea);
    return [kpkWea, punWea];

}

let a = weatherPak();
a.then((value) => {
    console.log(value);
})