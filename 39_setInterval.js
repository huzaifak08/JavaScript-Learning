// setInterval:Run this function after every 3 sec

// Same Syntax: setInterval(function, time, <args1>,<args2>,...);

// Function:
const sum = (a, b) => {
    console.log('Yes it is returning ' + (a + b));
    alert('Yes it is returning ' + (a + b));
}

let timerId = setInterval(sum, 3000, 1, 2);

// Clear the Interval:
clearInterval(timerId);
