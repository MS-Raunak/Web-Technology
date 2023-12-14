/*
 - object can contain anything
 - it is a key pair value
  5 way to create object in js
  1.Using Object literal  
  2.Using Constructor
  3.Using Function
  4.Using class
  5.Using Function
*/

let JsUser = {
    fName : "Raunak",
    lName : "Kumar",
    email : "rku@gmail.com",
    mobile : "898234355",
    isLoggedIn : "false", 
    latLoginDays : ["Monday", "Sunday"]
}
// First method to access object value: using (.)notation
console.log(JsUser.email)  
// Recommended 2nd method to access object value : using [] notation
console.log(JsUser["email"]) 

// during the accessing key must be inside double quote
console.log(JsUser["mobile"]) 

// Changing value
JsUser.lName = "agrawal"
console.log(JsUser["lName"]) 
console.log(JsUser)

// make object as constant so that no-one can change the value
/* Object.freeze(myInfo)
JsUser.fName = "Ronu"
console.log(JsUser)  // not changed
*/

// adding new value as function with key greeting
JsUser.greeting = function(){
    console.log("Hi, Welcome dear!")
}
console.log(JsUser.greeting())
console.log(JsUser)  

JsUser.greeting2 = function(){
    console.log(`Hi, ${this.fName} welcome to the page`)
}
console.log(JsUser.greeting2())
