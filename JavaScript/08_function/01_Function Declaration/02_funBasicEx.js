let a =  Number(prompt("Enter a:"));
let b =  Number(prompt("Enter b:"));
let c;

function add()
{
    c = a + b;
    //console.log("a + b = "  +  c)
    console.log(a + "+" + b + " = "  +  c)
}

function multipication()
{
    console.log(a + "x" + b + " = " + a*b)
}

function substraction()
{
    console.log( a+ "-"+ b+ "="+ (a-b))
}

add();
multipication();
substraction();