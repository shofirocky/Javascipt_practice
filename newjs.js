/*
let num = 10;
let num1 = 20;
const nums=num+num1;
console.log(nums);

let swaaap = num;
num = num1;
num1 = swaaap;
console.log(num);
console.log(num1);
*/

/*
const prompt = require("prompt-sync")();
const celsius = prompt("please enter:");
const calculatefarenhite = (celsius*1.8)+32;
console.log(calculatefarenhite);

*/
/*
const a= 1 , b = 3;
d= b > a;
console.log(d)

*/

/*
const prompt = require("prompt-sync")();
const num1 = prompt("please enter num 1 : ");
//const num2 = prompt("please enter num 1 : ");
if (num1  % 2 == 0){
    console.log("this is even");
}
else{
    console.log("odd")
}
*/

/*
for (let i=1; i <10; i++){
    console.log(i)

}
    


*/

/*
let numbers = [5,5,10]
let sum = 0;
for(let i = 0; i < numbers.length; i++){
   sum+=numbers[i];

}
console.log(sum);
*/

/*
let numbers = [5,5,10]
let sum= [];
for(let i = 0; i < numbers.length; i++){
 console.log (  numbers[i]);
  
}
*/

/*

for (let i = 1; i<=100; i++){
    console.log(i);
}
*/


/*
const prompt = require("prompt-sync")();
let text = prompt("enter text");
let count= 0;
let vouels = "aeiouAEIOU";
for (i=0; i<text.length; i++){
    if (vouels.includes(text[i])){
        count++;
    }
}
console.log(count);
*/

/*
//const prompt = require("prompt-sync")();
//let text = prompt("enter text");
let count= 0;
for(let i=0; i<10;i++){
   count ++;

}

console.log(count);
*/

/*
function countvouel (text){
    let vouels = "aeiouAEIOU";
    let count = 0;
    for ( i = 0; i<text.length; i++){
        if (vouels.includes(text[i])){
            count++
        }
    }
    return count
}
console.log(countvouel("hello world"))
*/

/*
let c;
function add (a, b){
    c=  a+b;
    return c;
}
console.log (add (5,6));
*/


/*
function maxNumber(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(maxNumber([4, 2, 9, 1]));  // 9
*/


/*
function login (username, password){
    let name = "shofi";
    let pass = "1234";
    if (name == username && pass == password){
        console.log("correct")
    }
    else{
        console.log ("not correct")
    }

}
login("shofi","12345")

*/

/*
const prompt = require("prompt-sync")();
function login (username, password){
    let user = "shofi";
    let pass= "1234";
    if (user==username && pass == password){
        console.log("correct")
    }
    else{
        console.log("not correct")
    }

}
let username = prompt("Username:");
let password = prompt("pass : ");

login (username,password)
*/

