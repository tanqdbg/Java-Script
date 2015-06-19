"use strict";

var knots = function(kmPerHour){
    var valueKnots = kmPerHour*0.5399568034557235;
    valueKnots = valueKnots.toFixed(2);
    console.log(valueKnots)
};
knots(20);
knots(112);
knots(400);


