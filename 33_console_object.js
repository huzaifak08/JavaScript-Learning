// Console Object:

console.error('This is an error');

console.assert(555 > 999); // Assertion Failed.
console.assert(555 > 23); // This will return no error.

const obj = {
    a: 'Eid ul Azha',
    b: '2023',
    c: '2nd Day',
}
console.table(obj); // This will create table of these key values.

console.warn("Hey don't be Sad, Allah is with you."); // This will shown it in yellow warning.

console.info('Hey this is an important info');

// Time Example 1:
console.time(); // How much time it take to complete.
console.time('a'); // This a here is label which we will use in timeEnd.
console.timeEnd('a'); // 0.152ms at current date.

// Time Example 2:
console.time('forLoop');
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.timeEnd('forLoop'); // 1.442ms

console.clear(); // This will clear the whole console.