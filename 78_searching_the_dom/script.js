/* DOM Navigation properties are helpful when elements are closed to each other.
    If the elements are not closed then, we have some more methods to search DOM. 
*/

let cTitle = document.getElementsByClassName("card-title")[0];
console.log(cTitle);
cTitle.style.color = "red";

let caTitle = document.getElementById("firstcardtitle");
console.log(caTitle);
caTitle.style.color = "blue";

let carTitle = document.querySelectorAll(".card-title");
carTitle[0].style.color = "blue";
carTitle[1].style.color = "red";
carTitle[3].style.color = "green";

console.log(document.querySelector(".card-title").getElementsByTagName("a"));
