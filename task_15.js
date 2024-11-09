/*
### Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/

var a = isNaN('11');
console.log(a);
let b = isNaN(2 - 10);
console.log(b);

// Answer is false, its give the false when it a number or were able to covert to number. "11" and 2-10 is convertable to number and negative number so it's nota NUmber of Nan is false.

/*
### Task-5
What will be the result of the following codes:

var b = isNaN("123");

var b = isNaN(5 + "5");

Explain your answers.
*/
var c = isNaN("123");
console.log(c);
var d = isNaN(5 + "5");
console.log(d);
/*
### Task-6
What will be the result of the following codes:

var x = isNaN("100");

var x = isNaN("Hello");

Explain your answers.
*/

var x = isNaN("100");
console.log(x);
var y = isNaN("Hello");
console.log(y);