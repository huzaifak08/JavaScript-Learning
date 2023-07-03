// Try Catch in JavaScript:

setTimeout(() => {
    console.log('Wifi haking started...');
}, 1000);

setTimeout(() => {
    console.log('Hacking kamran facebook id...');
}, 2000);

// Suppose here we return something that cause error
// return (rahul);     // This will stop the execution of whole code.

// If we want not to stop execution even if the error occour, then we have to catch it.

try {
    return (rahul); // Now we will get the error but execution will not stop.
} catch (error) {
    console.log(error);
}


setTimeout(() => {
    console.log('Kamran username and password Fetching...');
}, 3000);

setTimeout(() => {
    console.log('Kamran username and password Fetched...');
}, 4000);

setTimeout(() => {
    console.log('Hacking done Successfully...');
}, 5000);

// try catch will only handle synchronous code not scheduled code:

// For example using setTimeout in try catch:

try {
    setTimeout(() => {
        return (rahul); // Now this is causing error.
    });
} catch (error) {
    console.log(error);
}