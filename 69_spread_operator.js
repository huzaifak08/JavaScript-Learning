// Spread Operator: Convert an array in key value pair

let arr = [3, 5, 8];
let obj = { ...arr }; // Object of array 'arr'

console.log(obj); // OUTPUT: { '0': 3, '1': 5, '2': 8 }

// Pass the array to function that takes equal amount of values:
sum = (v1, v2, v3) => {
    return v1, v2, v3;
}

console.log(sum(...arr));

// Print and object but change its one value:
let obj1 = {
    name: "Huzaifa",
    age: 22,
    gender: "Male",
}
console.log({ ...obj1, name: "Kamran" }); // Must use ...obj1 before any changing value.