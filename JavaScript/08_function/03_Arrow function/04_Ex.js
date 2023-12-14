let calculate = (m, n, add) =>{  // calculate is a higher order function
    let result = add(m,n);
    return result;
}

let addNum = (a,b) => a+b;


let result = calculate(10,20, addNum) // addNum is a callback function
console.log(result);
