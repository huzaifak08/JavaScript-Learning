// Before ECMAScript 6 (ES6) 'var' was used the most:

var a = 35;
var b = 'var b here';
var c = true;
var d = null;
var e = undefined;

{
    var b = 'B in block';
    console.log(b); // This will return 'B in block'
}
console.log(b); // This will return 'B in block'

// This means you can simply change any variable from anywhere as shown above.