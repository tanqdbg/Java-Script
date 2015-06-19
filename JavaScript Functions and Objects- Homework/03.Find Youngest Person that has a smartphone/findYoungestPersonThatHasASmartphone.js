"use strict"
var findYoungestPerson = function(array){
    var yangestPerson;
    var minAge= Number.MAX_VALUE;
    for (var i = 0; i < array.length; i++) {
        if( array[i].age < minAge){
            minAge = array[i].age;
            yangestPerson = array[i];
        };
     };
    console.log("The youngest person is "+yangestPerson.firstname +' '+ yangestPerson.lastname );
};


var people = [
        { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
        { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
        { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
        { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);