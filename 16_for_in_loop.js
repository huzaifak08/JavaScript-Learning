// For In Loop:

const obj = {
    Huzaifa: 95,
    Farman: 98,
    Wajahat: 99,
    Abdullah: 100,
    Ahmed_Khan: 120,
}

for (let i in obj) {
    console.log(i); // This will only print all the Keys.

    console.log('Marks of ', i, 'is: ', obj[i]); // This will only print both the Keys and Values.
}