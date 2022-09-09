var str = 'Hello World!';
console.log(str);

str = str.toUpperCase();
console.log(str);

str = str.toLowerCase();
console.log(str);

str = str.replace('world', 'deakin');
console.log(str);

words = str.split(" ");
console.log(words[0])
console.log(words[1])

str = words[0].concat(", ", words[1]);
console.log(str);

var strArray = ["John", "Jack", "Fred"];
var numArray= [56, 86, 34];

console.log(strArray);
console.log(numArray);

strArray.push("Bill");
console.log(strArray);

console.log(numArray.sort());

console.log(numArray.filter(greaterThanFifty));

console.log(numArray.some(greaterThanFifty));

console.log(numArray.every(greaterThanFifty));

var date = new Date();
console.log(date);

console.log(date.toDateString());

console.log(date.toUTCString());

date.setDate(30);
console.log(date);

date.setMonth(1);
console.log(date);

function greaterThanFifty(num) {
    return num > 50;
}