"use strict";

function solve(input) {
    var numArray = input.filter(function (i) {
        return !isNaN(i);
    });
    numArray = numArray.sort(function (x, y) {
        return x > y;
    });

    var mostOccurancesNumber = 0;
    var counter = 1;
    var maxCounter = 0;

    for (var j = 0; j < numArray.length - 1; j++) {
        if (numArray[j] === numArray[j + 1]) {
            counter++;
        }
        if (counter > maxCounter) {
            maxCounter = counter;
            mostOccurancesNumber = numArray[j];
            counter = 1;
        }
    }
    console.log("Min number: " + numArray[0]);
    console.log("Min number: " + numArray[numArray.length - 1]);
    console.log("Most frequent number: " + mostOccurancesNumber);
    console.log(numArray.reverse());
}


solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);
