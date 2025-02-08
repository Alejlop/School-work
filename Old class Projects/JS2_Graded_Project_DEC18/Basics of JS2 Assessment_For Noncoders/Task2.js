// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

//COMPLETE YOUR CODE HERE 

function checkEven(num) {
    return num % 2 === 0;
}
function filterEvens(numbers, checkEven) {
    return numbers.filter(checkEven);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = filterEvens(numbers, checkEven);

console.log(evenNumbers);




//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

//COMPLETE YOUR CODE HERE 

(function(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    console.log(`The factorial of ${num} is ${result}`);
})(5);


//3. Implement a function calculate that takes three arguments: a, b, and an operation function. 
//The operation function should accept two parameters and perform a specific mathematical operation like addition, subtraction, multiplication and division. 
//Use call(), apply(), or bind() to apply the operation function to the arguments a and b.

//COMPLETE YOUR CODE HERE 

function calculate(a, b, operation) {
    return operation.call(null, a, b);
  }

  function add(a, b) {
    return a + b;
  }
  const a = 10;
  const b = 5;
  
  console.log(calculate(a, b, add));

//4. Given an araay of person objects, define a function to find oldest person object.

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
//COMPLETE YOUR CODE HERE 

function oldestPerson(persons) {
    return persons.reduce((oldest, current) => {
      return (oldest.age || 0) > current.age ? oldest : current;
    }, {});
  }

  console.log(oldestPerson(persons));


//5.  Create a function that calculates the sum of an array using IIFE function.

//COMPLETE YOUR CODE HERE 

const sum = (function() {
    return function(arr) {
      return arr.reduce((a, b) => a + b, 0);
    };
  })();
  
  console.log(sum([1, 5, 12]));

