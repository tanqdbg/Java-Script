"use strict";

function calcSupply(age, maxAge, food, foodPerDay) {
    var kg = ((maxAge-age)*365*foodPerDay);
    console.log( kg + "kg of " + food + " would be enough until I am " + maxAge + "years old." );
}
calcSupply(38,118,'chocolate', 0.5);
calcSupply(8,87,'fruts',2);
calcSupply(16,102,'nuts', 1.1);