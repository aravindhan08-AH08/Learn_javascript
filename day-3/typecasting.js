// variable name -> x
//  variable value -> "15"

// typecasting
var x = "15";
// console.log(x, typeof x)
// to convert to number and print
// !! Option 1
// var y = parseInt(x)
// console.log(y, typeof y)
// !! Option 2
var y = Number(x);
// console.log(y, typeof y)

// rule 1: have alphabets and numbers
// rule 2: begin with numbers first & then have alphabets
// rule 3: max length of password - 8
var password = "a373";
// difference between Number and parseInt
console.log(Number(password)); // 12345
console.log(parseInt(password)); //abc

// variable name -> amount
// variable value -> 1000
// !! Option 1
var amount = 1000;
console.log(amount, typeof amount);
var z = String(amount);
// console.log(z, typeof z)
// !! Option 2
console.log(amount.toString());
Collapse