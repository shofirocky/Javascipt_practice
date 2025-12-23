// array ----------------
const collection1 = ['a', 'b', 'c'];


// 1. check for "b" existence
const exist= collection1.includes("b");
console.log("1. check for b existence: " +exist);



// 2. loop each & log 
const collection2 = ['a', 'b', 'c'];

for (let i =0; i<collection2.length; i++){
    console.log(" 2. loop each & log :" +collection2[i])
}


// 3. add "f" to the end and again in start
const collection3 = ['a', 'b', 'c'];

const add = collection3.push("f");
console.log (add);
//const addmore = collection.unshift ("N");
//console.log (addmore);



// 4. reverse the collection
const collection4 = ['a', 'b', 'c'];

console.log (collection4.reverse());


// 5. filter out "a" & "c"
/*
for (let i=0; i<=collection.length; i++)
    if (collection[i]=="a" && collection[i]=="b"){
        console.log(collection[i]);
    }
        */


// 6. change "a" & "b" to "x" & "y"
const collection5 = ['a', 'b', 'c'];

collection5[1]= "X";
console.log (collection5);



