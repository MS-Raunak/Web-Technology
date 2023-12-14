/*
 Stroy of const, var & let
 Syntax: keyword identifier; => declaration
        keyword identifier = value; => initialization
        
 const : cant reinitialize because of a constant variable
 let : can reinitialize but can't declare variable with same name
 var : can reinitialize and also can declare variable with same name(Not recommended to use)
*/


const changeTemp = "you can't";
let changeValue = "you can"
var sameDeclaration = "multiple declaration, you can"
sameDeclaration = "ooo" // reinitialized

console.table([changeTemp, changeValue, sameDeclaration])

// Inspection above code

 //changeTemp = "other temp"; // can't reassign
changeValue = "you can" // can reassign
var sameDeclaration = "possible" // can declare variable with same name

//console.log(changeTemp);  // error
console.table([changeValue, sameDeclaration])


