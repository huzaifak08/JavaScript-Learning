// Question 1:

console.log("har\"".length); // 4

// Question 2:

let sentence = "Allah is the creator of this universe.";

console.log(sentence.includes("Allah", 0) ? 'Yes Allah name is written here' : 'Not Written');
// 0 means start searching from start position which is not compulsory.

// Question 3:

let sentence2 = "Today we went to Police Khidmat Center";
console.log(sentence2.toLowerCase());

// Question 4:

let sentence3 = "Please take amount RS 25000";

console.log(sentence3.slice('Please take amount'.length));
console.log(sentence3.slice(22)); // Both are same.

// Question 5:

console.log(sentence3.replace(sentence3[4], 'R'));