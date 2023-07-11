// Regular Expressions: are pattern use to match character combinations in string.

const text = 'Harry is a very very very good boy';
console.log(text.replace('very', ('VERY'))); // This will replace only the first very, without regex.

// To replace all, we use regex:
const regex = /very/g   // Change very Globally
console.log(text.replace(regex, "VERY"));

// ----->  /(harry){2}/gi

// Link to Website: https://regexr.com/7grcl