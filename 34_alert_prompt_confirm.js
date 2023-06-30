// Prompt:
let fname = prompt('Enter you name');

// Alert:
alert(`The name is ${fname}`);

// Confirm:
let write = confirm('Do you want to write it to console?');

if (write) {
    console.log(fname);
} else {
    console.log('Permission denied');
}