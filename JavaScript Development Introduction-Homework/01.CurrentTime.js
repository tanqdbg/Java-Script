var now = new Date();
console.log(now);
var now2 = new Date().toUTCString();
console.log(now2);


var tora = new Date();

var now_utc = new Date(tora.getUTCFullYear(), tora.getUTCMonth(),
    tora.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(),
    now.getUTCSeconds());
console.log(now_utc);
