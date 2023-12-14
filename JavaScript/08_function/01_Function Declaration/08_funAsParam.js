main();

function main()
{
   let num1 = Number(prompt("Enter num1:"));
   let num2 = Number(prompt("Enter num2:"));
   let output = calculate(num1, num2, add);
   console.log("sum of "+ num1 +"+"+ num2 +" = "+ output)
}

function calculate(a, b, callBack)
{
    let result = 0;
    result = callBack(a,b);
    return result;
}

function add(x, y)
{
    return x+y;
}