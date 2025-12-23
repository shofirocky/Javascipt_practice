const str = 'This is string';
console.log(str);


// 1. Find out the length on the string
let lent= str.length;
console.log (lent);


// 2. find how many "i" exists
let count = 0
for (let i = 0; i<= str.length; i++){
   //console.log(str[i])
   if (str[i]=="s"){
       count++;
       //console.log(count);
   }
}
console.log (count);


// 3. replace the last "i" with "x"
let rep= str.replace(/i/g, "x");
console.log(rep);


// 4. check if "is" exists
let exist = str.includes("is");
console.log(exist);

// 5. get all from "is"

let get = str.slice(5,7);
console.log(get);
// 6. make "is" uppercase
console.log(get.toUpperCase());

// 7. make "is" lowercase
console.log(get.toLowerCase());

// 8. convert whole string to snake case
const casesnake = "This Is FOR snace CAse";
const cae = casesnake.toLowerCase().replace(/\s+/g, "_");
console.log (cae);

/*
function toSnakeCase(strn) {
  return strn
    .toLowerCase()
    .replace(/\s+/g, "_");
}
   

const tosnake = toSnakeCase("THis IS all for STRing"); // "hello_world"
console.log(tosnake);
 */

// 9. convert whole string to camel case
const camelcase = casesnake.toLowerCase().trim().replace(/[_-\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : "");
console.log("Camelcase:" +camelcase);


//Fetch data  frm object & array of object
const successResponse = {
  "status": true,
  "msg": "Fetch successful",
  "data": {
    "categories": [
      {
        "name": "Fast Food",
        "price": 570,
        // ...
      },
      // ...
    ],
    "items": [
      //...
    ]
  }
};

console.log(successResponse.status)
console.log(successResponse.msg)