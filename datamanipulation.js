// 5. get all from "is"

/*


const getis = 'This is string is';
const mat = getis.match(/is/g);
console.log(mat);

const getis = 'This is string is';
let get = getis.split(" "); 

for(let i=0; i< get.length;i++){
    if (get="is"){
        console.log(get);
    }

}

// 2. find how many "i" exists
const str = 'This is string';
let count = 0
for (let i = 0; i<= str.length; i++){
   //console.log(str[i])
   if (str[i]=="i"){
    console.log(str[i]);
       count++;
       //console.log(count);
   }
}
console.log (count);



//const casesnake = "This Is FOR snace CAse";
//const cae = casesnake.match(/is/g).toUpperCase();
//console.log (cae);


let getis = 'This is string is';
let get = getis.split(" "); 

for(let i=0; i< get.length;i++){
    if (get[i]==="is"){
        get[i]="is".toUpperCase();
        
    }

}
let makeupper = get.join(" ");
console.log(makeupper)
*/
let getis = 'This is string is';
let get = getis.split(" "); 

get.forEach((words, windex)=>{
   
    if (words==="is"){
        get[windex] = words.toUpperCase();

        
    }
}
);
let makeupper = get.join(" ");
console.log(makeupper);


const companies = ["Shofi", "Ahmed", "Rocky"];
companies.forEach((word, index)=>{
    let wordds= word;
    let indexs= index;
    console.log(wordds,indexs)

});


/*
// 6. change "a" & "b" to "x" & "y"
const collection5 = ['a', 'b', 'c', 'd', 'e'];

collection5[1]= "X";
console.log (collection5);
*/


// 6. change "a" & "b" to "x" & "y"
const collection= ['a', 'b', 'c', 'a', 'd'];
//console.log(collection[3]);
//console.log(collection.length)
for (let i=0; i<collection.length; i++){
    if (collection[i]==='a'){
        collection[i]=collection[i].replace("a","x");
        
    }
}
console.log(collection);

 // 6. change "a" & "b" to "x" & "y" using map
const collection2= ['a', 'b', 'c', 'a', 'b'];
const collectionmap= collection2.map(items => {

    if (items==="b"){
        return items.replace("b","x");
}  
    return items;

});
console.log(collectionmap);


