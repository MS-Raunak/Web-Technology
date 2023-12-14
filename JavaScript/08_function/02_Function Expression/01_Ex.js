// In the case of expression function we cant call the function before initialization but in function declaration we can.

// expressionFun(); error

let expressionFun = function(){
    console.log("Hello, I am Function Expression");
}
expressionFun();