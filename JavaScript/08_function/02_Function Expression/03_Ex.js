let eFun = function(num1, num2, add){
    let result = add(num1, num2);
    return result;
}

// let result = eFun(10,12,addTwo); // error: cant use before initializtion

let addTwo = function(n1 , n2){
    let res = n1 + n2;
    return res;
}

let result = eFun(10,12,addTwo);
console.log(result);