var a = 1;

var b = 3;

function f() {

    console.log( a );

    console.log( b );

}

f();

console.log( a );

console.log( b );

var oneObj={Song: "Prayer",Year:2021};

var twoObj={Song:"Prayer",Year: 2021};

console.log(oneObj==twoObj);

console.log(oneObj===twoObj);

const sum = (function(x,y){

    return x+y;

 })(10,20);

  

const sumAgain = function(x,y){

 

    return x+y;

}

console.log(sum == sumAgain);


//Anonymous functions in JavaScript are functions that do not have a name associated with them 
//1. They are defined using the function keyword without a function name 
//1. Anonymous functions are commonly used as callbacks in JavaScript 
//1. They can be passed as arguments to other functions and invoked later 
//1. Anonymous functions can also be invoked immediately after their creation, which is known as a self-executing function 1.

//Therefore, the correct answer is: They are commonly used as callbacks 1.

//In JavaScript, `call` and `apply` are two methods that allow you to invoke a function with a specified `this` value and arguments ¹²³. The main difference between the two is in how they accept arguments.

//The `call` method accepts an argument list, where each argument is passed separately ¹²³. For example, if you have a function `func` that takes three arguments, you can call it using `call` as follows: `func.call(thisValue, arg1, arg2, arg3)` ¹²³.

//On the other hand, the `apply` method accepts an array of arguments ¹²³. For example, if you have a function `func` that takes three arguments, you can call it using `apply` as follows: `func.apply(thisValue, [arg1, arg2, arg3])` ¹²³.

//In terms of performance, `call` is generally faster than `apply` when passing a small number of arguments ¹²³. However, when passing a large number of arguments, `apply` can be faster than `call` ¹²³.

//I hope this helps! Let me know if you have any other questions. 😊

var sholay={

    name :"Sholay",

    cast : "Amitabh",

    year : 1975

}

delete sholay['year'];

console.log(sholay);


const sum = (function(x,y){

    return x+y;

 })(10,20);

  

const sumAgain = function(x,y){

 

    return x+y;

}

console.log(sum == sumAgain);