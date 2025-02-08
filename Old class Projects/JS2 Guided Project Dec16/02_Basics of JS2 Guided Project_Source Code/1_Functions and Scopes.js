// Question 1: Anonymous Function
// Write an anonymous function that takes two numbers as parameters and returns their sum.

var sum = function (a, b){

return a + b;
};
console.log(sum(2, 30));


// Question 2: IIFE Function
// Write an IIFE (Immediately Invoked Function Expression) that prints "Hello, World!" to the console.

(function ()
{
    console.log('hello, world');
    
})();

// Question 3: Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope. 
//The function should have a local variable and a global variable, and 
//it should print their values.

var globalVariable = 'I am global'; //global variable

function sccopeDemo() {
    var localVariable = 'I am local'; //local variable

    console.log(localVariable); 
    
    // if you change the value in here it will not effect the global variable
    
    console.log(globalVariable);
}
sccopeDemo();




// Question 4: Anonymous Function as a Parameter
// Write a function that takes an anonymous function as a parameter and invokes it.

function highOrderFunction (callback){
        callback();
}

highOrderFunction(function() {
    console.log('anonynous function is envoked');
});

// Question 5: IIFE Returning a Value
// Write an IIFE that returns the square of a number and assign the result to a variable.

var number = 5;

var square = (function (num) {
    return num * num;
})(number);   
//or you can place the number 5 and get the same result
// you dont have to name with 5 cause its anonynous
console.log(square);



