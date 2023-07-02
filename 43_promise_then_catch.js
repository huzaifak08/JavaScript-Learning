// Promise Then and Catch function: Both promises will execute parallerly

// Promise 1: Resolve
let p1 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        resolve(true); // This can be boolean,array,string etc.
    })
}, 5000);

// Promise 1: Rejected
let p2 = new Promise((resolve, reject) => {
    console.log('Promise is Pending');
    setTimeout(() => {
        reject(new Error('This is an error'));
    })
}, 5000);

// Then:
p1.then((value) => {
    console.log(value); // true
})

// Catch:
p2.catch((error) => {
    console.log('Some error occoured');
})

// Both then and catch:
p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})