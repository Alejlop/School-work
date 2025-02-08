// Question 1: Write a function that concatenates two strings using the `bind` method.

function concatenatesStrings(str1, str2) {
return this + str1 + str2;
}

var greeting = 'Hello';
var boundConcatenates = concatenatesStrings
console.log(concatenatesStrings('John', '!'));
// not finished//

// Question 2: Create a function that counts the number of properties in an object using `apply` 
//and the `arguments` object.

function countProperties


// Question 3: Write a function that accepts another function as an argument 
//and returns a modified version of it that logs a message before 
//and after executing the original function.

function modifyFunction(originalFunction) {
    return function ()
    {
        console.log('Before executing the function'); //this is just the simple function//
        var result = originalFunction.apply(null, argument);  //apply is used when you want to incorporate an array//
        console.log()
    }
}