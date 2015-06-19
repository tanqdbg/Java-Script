"use strict"
var extractObjects = function(array){
    var output =[];
    for(var i in array){
        if((typeof array[i]=== 'object')&&(!Array.isArray(array[i]))){
                output.push(array[i]);
            }
    };
    console.log(output);
};

var input= [
                "Pesho",
                    4,
                    4.21,
                { name : 'Valyo', age : 16 },
                { type : 'fish', model : 'zlatna ribka' },
                    [1,2,3],
                    "Gosho",
                { name : 'Penka', height: 1.65}
            ];

extractObjects(input);