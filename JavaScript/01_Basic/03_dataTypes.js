/*
Types-2:
=======
1.Primitive     2.Non Primitive : Array,class,object,function, ....etc

There are seven types of non-primitive 
1. Number    : can store all type of number
2. String    : can store character or group of character
3. Boolean   : can store boolean value(true/false)
4. Null      : can store only null value(null)
5. Undefined : can store only undefined value(storing by default when variable not initialized)
6. Symbol    : using to store unique value(ES6)
7. BigInt    : can store big number if Number dtypes is not capable to store(ES11)
*/

let numberVal = 10;
let stringVal = 'it is stringVal';
stringVal = 'another stringVal';
stringVal = "one more stringVal";
let booleanVal = true;
let nullVal = null;
let undefinedVal = undefined;
let symbolVal = Symbol(123)
let symbolVal1 = Symbol(123)
let bigIntVal = 123456789876543256789876545678987898789n;

console.log(numberVal, typeof numberVal);   // number
console.log(stringVal, typeof stringVal);   // string
console.log(booleanVal, typeof booleanVal); // boolean
console.log(nullVal, typeof nullVal);       // object
console.log(undefinedVal, typeof undefinedVal); // undefined
console.log(symbolVal === symbolVal1);        // false
console.log(bigIntVal, typeof bigIntVal);    // bigInt
