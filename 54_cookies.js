// Cookies: Small strings(4KB) of data stored directly in the brower.

// Per domain we have 20+ cookies(depends on the browser);

// alert(document.cookie)

document.cookie = "name=Harry1234";
document.cookie = "name2=Harry4567";
document.cookie = "name=Hunny8888"; // Nw this will over write the previous one.

console.log(document.cookie);

// Some more detail:

let key = prompt('Enter your key');
let value = prompt('Enter your value');

// document.cookie = `${key}:${value}`; // This will work good with strings but cause glitch incase of special characters($;!@#)

// to overcome this glitch, we use encodeURIComponent function:
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`; // This will encode your key value.

console.log(document.cookie);

// To decode this use the function decodeURIComponent();