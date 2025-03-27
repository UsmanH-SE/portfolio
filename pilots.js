// console.log("Hello, Wellcome to the store");
// console.log("we are offering coffies in 2$ each and cookies in 1$ each");
// let q1=prompt("How many coffies cup would you like?")
// let q2=prompt("How many cookies would you like?")
// let q3=prompt("How much would you like to leave a tip?"


// q1= parseInt(q1)
// q2= parseInt(q2)
// q3= parseInt(q3)

// c1 = q1*2
// c2 = q2*1

// let taxes = (c1+c2)*0.1;
// let total = c1+c2+q3+taxes
// console.log("you have order" + q1 + "coffies of the total "+ c1 + "$");
// console.log("you have order" + q2 + "cookies of the total "+ c2 + "$");
// console.log("you have left "+ q3 +"$ of tip and the total bill is " + total +"$ with taxes");


// Use the ternary operator to check if a person is eligible to vote (age >= 18).

// let num = Number(prompt("Enter your age"))
// if (num>4) {
//     window.location.href = "https://www.google.com";
// }else{
//     alert("Num is not greater than 4 staying on the same page")
// }

// Print numbers from 1 to 50 using a for loop.
// for (let index = 0; index < 5000; index++) {
//     console.log(index);
    
    
// }

// Print all even numbers from 1 to 20 using a while loop.
// let firstelement = document.querySelector("nav");
// firstelement.style.color = "red";
// firstelement.style.backgroundColor="pink";

let parent= document.querySelector(".parent");
// console.log(parent);
//  console.log(parent.children[1].innertext);
//  console.log(parent.children[3].outerHTML)

// for (let i = 0; i< parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
    
// }
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
//  let dayone = document.querySelector(".day");
//  console.log(dayone);
//  console.log(dayone.parentElement)
//  console.log(dayone.nextElementSibling)
console.log(parent.childNodes);
let div = document.createElement("div")
console.log(div)
div.className= ("pilot")
div.id = (Math.random()*10 + 1)
div.setAttribute("district", "attock")

let create = document.createTextNode("Wellcome pilot usman")
div.append(create)
 document.body.appendChild(div)

 
 
