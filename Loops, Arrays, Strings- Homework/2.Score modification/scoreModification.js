"use strict"


function solve(input){
//filter out all valid scores -between 0 and 400 //
var newArray =  input.filter(function(element){
   return (element >=0)&&(element <= 400);
});
//sorting//
newArray = newArray.sort(function(x,y){
   return x > y;
});
//downwards by removing 20% out of each score//
newArray = newArray.map(function(element){
    return Number((element * 0.8).toFixed(1));
    // друго решение вместо Number(..) e c:  parseFloat(..);
});
console.log(newArray);
}
solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);