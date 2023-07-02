// setTimeout: Run the function after given interval of time.(3 secs)

// Syntax: setTimeout(function, time, <args1>,<args2>,...);

setTimeout(function () {
    alert('This is from Inside of setTimeout');
}, 3000);    // 3000 ms = 3 sec

// Get timer id:
let timerId = setTimeout(function () {
    alert('This is from Inside of setTimeout');
}, 3000);

console.log(timerId);
alert(timerId);

// cancel the timeout: No Timeout will occour.
clearTimeout(timerId);

// More Advance way:
// Function:

const sum = (a, b) => {
    console.log('Yes it is returning ' + (a + b));
    alert('Yes it is returning ' + (a + b));
}

setTimeout(sum, 2000, 1, 2);
// setTimeout(function, time, value of a, value of b);

