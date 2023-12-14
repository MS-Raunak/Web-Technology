/**
 * Promise is used to handle the asynchronous code
 
 * Promise has 3 object
 * 1.pending: Indicates program is executing or establshing the connection with any resourse
 * 2.resolve(): indicates program is successfully executed with some result
 * 3.rejected(): indicates progrma executed with some errors.
 *NOTE:-
 * when resolve() executed .then() will be called
 * when rejected() executed .catch() will be called
 * finally() always executed
 
 * Promise object,then,catch,finally takes one callback function to execute their task

*/



// First method: Create Promise object and store in a variable
/*
let promiseOne = new Promise(function(resolve, rejected){
    setTimeout(function(){
        console.log("Promise Executed");
        resolve();
    },1000)
} )

promiseOne.then(function(){
    console.log("Promise Consumed");
})
*/



// second method: create an object for promise and user-defined .then directly
/*
new Promise((resolve, rejected) => {  // resole and rejected is user-defined parameters
    setTimeout(()=>{
        console.log("Async Task2");
        resolve()
    }, 3000)
}).then(()=>{
    console.log("Async Task2 Consumed");
})
*/

// Example1
/*
const promise3 = new Promise(function(resolve,rejected){
    setTimeout(function(){
        resolve({name:"Chhaya", age:2.5, msg:"she is a kid"}) // can take any data here
    },2000)
})

promise3.then(function(user){
    console.log(user); // receiving data
})
*/

// Example2
const promiseFour = new Promise(function(resolve,rejected){
    console.log("Starting Process...")
    let error = false;
    if(!error){
        resolve({name: "Chhaya", gmail:"chhaya90@gmail.com", password:"chhaya@123"})
    }else{
        rejected("Something went wrong!")
    }
})

promiseFour.then((user)=> {  // To avoiding the callback hell we are using multiple then()
    console.log(user);
    return user.name
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("DB Connection Off");
})
