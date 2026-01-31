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

/*

const arr = [3, 7, 2, 9, 5];

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log("Max:", max); // 9
console.log("Min:", min); // 2
*/

//let numberoff = ["hello", 1,3,5,6,7];
//console.log(numberoff[2]);

/*

const areas = ["amberkhana", "bondor", "subidbazar"];
areas.push("zindabazar0", "mirabazar");
console.log(areas);
*/

/*

let firstname="shofi";
let lastname="rocky";
let text=`this is ${firstname}  & this is ${lastname}`;
console.log(text);
*/

/*
let one=10;
let two = 20;
let text = `text are: ${(one+two*1.539).toFixed(2)}`;
console.log(text);
*/

/*
const a = "b";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
  */

/*
//String practice
let slen="abcdefgh";
let slen2="ijklmnop";
let longtext="hello world for programming";
console.log(slen.length);
console.log(slen.charAt(3));
console.log(slen.at(2));
console.log(slen.concat("",slen2));
console.log(slen.slice(0,5));
console.log(slen.slice(2));
console.log(longtext.indexOf("world"));
console.log(longtext.search("for"))
console.log(longtext.startsWith('world'))
console.log(longtext.startsWith("world",6))
*/


/*
//Number practice 

let numpractice=100;
//cnsole.log(numpractice);
let typecheck=numpractice.toString()
console.log(typeof typecheck)
console.log(numpractice.toString())
*/



//Function practice

//function temp (farenhite){
    //return (5/9) * (farenhite-32);

//}

//let temparature=temp(95);
//console.log(temparature);


//function plusminus(x, y=20){
    //return x + y;
//}
//console.log(plusminus(5))

//x= function(a,b){
    //return a+b;
//}
//y=x(5,5);
//console.log(y)


const prompt = require("prompt-sync")();
let num = parseInt(prompt("numbers: "))
let text = prompt("enter text");
let count= 0;
//let vouels= prompt("enter vouel value: ")
let vouels = "aeiouAEIOU";
for (i=0; i<text.length; i++){
    if (vouels.includes(text[i])){
        count++;
    }
}
console.log(count);
console.log(typeof(num));




