// Procedural way of javaScript
console.log("Hello World")

// Functional way of JavaScript
function main(){
    console.log("Functional way of javaScript")
}
main();

//Object Based of JavaScrippt
class A{

    A(){
        console.log("Object based way of JavaScript")
    }
}
A = new A()

// Print Prime Number in range
for(var num = 1; num <= 50; num++){
    var flag = true;
    if(num==1) continue;

    for(var i=2; i<=num/2; i++){
        if(num % i == 0){
            flag = false;
        }
    }
    if(flag)
        // window.alert(num + " is a prime number")
        console.log(num + " is a prime number")
}

// Print alternate Prime Number in range
var count = 0;
for(var num = 1; num <= 50; num++){
    var flag = true;
    if(num==1) continue;

    for(var i=2; i<=num/2; i++){
        if(num % i == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        count++;
        if(count%2==0)
            console.log(num)

    }
}

// Last Prime number in given range
var lastPrimeNum=0;
for(var num = 1; num <= 50; num++){
    var flag = true;
    if(num==1) continue;

    for(var i=2; i<=num/2; i++){
        if(num % i == 0){
            flag = false;
        }
    }
    if(flag){
        
        lastPrimeNum = num;
    }
}
console.log(lastPrimeNum + " is the last prime number")

// Last 3 prime number
var count1 = 0;
for(var i=50; i>1; i--){
    var flag = true;
    for(var j =2; j<=i/2; j++){
        if(i%j==0){
            flag = false;
            break
        }
    }
    if(flag){
        count1++;
        if(count1<=3){
            console.log(i + " last")
        }
    }

}

// Last 3 alternate prime number
var count2 = 0;
for(var i=50; i>1; i--){
    var flag = true;
    for(var j =2; j<=i/2; j++){
        if(i%j==0){
            flag = false;
            break
        }
    }
    if(flag){
        count2++;
        if(count1<=3*2){
            if(count2%2==0)
            console.log(i + " last")
        }
    }

}


// Automophic number: last digit of squareNumber = num(5^2=25)
var num = 7;  // number 
var sq = num * num; // square

for(var i=sq; ; i=i/10){
    var digit = i%10;
    if(num==digit){
        console.log(num + " is automophic number")
        break;
    }
    else{
    console.log(num + " is not a automophic")
    }
}
/*

// Neon number
var nu = 9;
var squr = nu * nu;
var sumOfDigit = 0;
for(var i=squr; i>0; i/=10){
    
    sumOfDigit = sumOfDigit + i%10;
    if(nu == sumOfDigit)
    console.log(nu + " is a Neon Number");
}
*/
