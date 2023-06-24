// Before ECMAScript 6 (ES6) 'var' was used the most:

var b = 'var b here';

{
    var b = 'B in block';
    console.log(b); // This will return 'B in block'
}
console.log(b); // This will return 'B in block'

// This means you can simply change any 'var' variable from anywhere as shown above.