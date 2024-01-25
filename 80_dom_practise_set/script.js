// Question 1:

let firstElement = document.getElementsByClassName("nav-link");
firstElement[0].style.color = "red";

// Question 3:

let element = document.getElementsByClassName("nav-item");
element[2].firstElementChild.style.color = "green";

// // Question 4:

let element1 = document.getElementsByTagName("li");

Array.from(element1).forEach((ele) => {
  ele.style.background = "cyan";
});

console.log(element1);
