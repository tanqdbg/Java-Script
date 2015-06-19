"use strict"
function solve(argument) {

     for (var i in argument) {
        //adding 10% on score - value;
        argument[i]['score'] = (Number((argument[i]['score']) * 1.1).toFixed(1));

        //adding 'hasPassed' key + value;
        if (argument[i]['score'] >= 100) {

            argument[i].hasPassed = true;
        } else {
            argument[i].hasPassed = false;
        }
    };
    //sorting by value of argument 'name';
    argument.sort(function (a, b) {
        return a.name > b.name;

    });
    //printing by value in key 'has passed';
     console.log( argument.filter(function(x){
        return x.hasPassed === true;
    }));
};

solve([{'name' : 'Пешо', 'score' : 91 },
    {'name' : 'Лилия', 'score' : 290},
    {'name' : 'Алекс','score' : 343},
    {'name' : 'Габриела','score' : 400},
    {'name' : 'Жичка','score' : 70}]);





