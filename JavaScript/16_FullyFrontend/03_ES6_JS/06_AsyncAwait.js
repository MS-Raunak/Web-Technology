/**
 * TO handle the asynchronous code we are using Async await keyword in js
 * Async Function() return Promise Object
 * by using asynch keyword we can make a fun as an async function
 * by using await keword we can wait for API info.
 * Error is mandatory to handle by using try-catch
 */

/*
const promiseObj = new Promise(function(resolve, rejected){
    console.log("Promise startted...");
    let err = true;

    if(!err){
        resolve({username: "Chhaya", password: "Chhaya@123"})
    }
    else{
        rejected("Error: Something went wrong")
    }
})

async function promiseResolver() { 
    try{
        const response = await promiseObj
        console.log(response);
    } catch(er){
        console.log(er);
    }
}
promiseResolver()
*/

//Example
async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        // console.log(response);
        console.log(data);
    }catch(err){
        console.log("Error: Something went wrong");
    }
}
getAllUsers()