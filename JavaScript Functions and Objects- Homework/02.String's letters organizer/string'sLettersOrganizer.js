"use strict";

function sortLetters(string, isAscending) {
    var str = [];
    for (var i = 0; i < string.length; i++) {
        str[i] = string[i];
    }

    if(isAscending){
        str = str.sort(function(a,b){return a.toLowerCase() > b.toLowerCase()});
    }else{
        str = str.sort(function(a,b){return a.toLowerCase() < b.toLowerCase()});
    }

    var sortedStr = str.join("");

    return sortedStr;

}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));