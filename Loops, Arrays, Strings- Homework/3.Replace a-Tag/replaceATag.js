"use strict"
var input ="<ul>" +
    "<li>" +
    "<a href=http://softuni.bg>SoftUni</a>" +
    "</li>" +
    "</ul>";

input = input.replace('<a', '[URL');
input = input.replace('bg>', 'bg]');
input = input.replace('</a>', '[/URL]');
console.log(input);


// drugo re6enie
function replaceATag(str) {
    var re = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;

    return str.replace(re, '[URL $1]$2[/URL]');
}

console.log(replaceATag('<ul> <li>  <a href=http://softuni.bg>SoftUni</a> </li></ul>'));

/////re6enie - Stoyko
function replaceATag(str)  {
    str = str.replace(/(<a)/g,'[URL');
    str = str.replace(/(>\b)/g,']');
    str = str.replace(/(<\/a>)/g,'[/URL]');
    str = str.replace('><', '>\n\t<');
    str = str.replace('>[', '>\n\t\t[');
    str = str.replace(']<', ']\n\t<');
    str = str.replace('><', '>\n<');
    console.log(str);
}
//o6te edno re6enie
function Solve(input) {
    var str = String(input);
    var re = /<a(.*?)>/g;
    str = str.replace(re, '[URL$1]');
    var re2 = new RegExp('</a>', 'g'); //find all </a> in text
    str = str.replace(re2, '[/URL]');
    console.log(str);
}