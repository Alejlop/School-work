// anon functions and iife
const sum = function(x,y){
return x+y;

};
console.log( sum(10, 20) );

// functions used usually once

function logResult( result ){
console.log(result);

}
// pulling from another function

var func=function(x,y,f)

{

f(x+y);

}

 

function print(result)

{

console.log(result);

}

 

func(5,4,print);


