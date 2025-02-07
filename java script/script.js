// function year(){
//     let year = prompt("Enter your age");
//     let a =2024;
//     console.log(a-year);
// };
// function year(){
//     let year = prompt("enter your year")
//     let d = 2024;
//     console.log(d-year);
// }
// year();

// let text = '    shiva     ';
// let rep  = text.replace(6);
// console.log(rep);

function myFunction() {
    let text = "please visit tv!";
    document.getElementById("demo").innerHTML=text.replace("computer","tv");
}

const bike = ["mt15","bmw","honda","splander","thar"];
delete bike[3];
console.log(bike);

const bike1 = ["mt15","bmw","honda","splander","thar"];
const bike2 =["pulsar","activa",];
const bike3 = bike1.concat(bike2);
console.log(bike3); 

const fruits =['mango','orange','apple','banana'];  
console.log(fruits.copyWithin(2,0));

const myArr =[[1,2],[3,4],[5,6],[7,8]];
const newArr = myArr.flat();
console.log(newArr);    

const fruits1 =['mango','orange','apple','banana'];  
fruits1.splice(3,0,"lemon", "kiwi")
console.log(fruits1);








