// var countries = [];
// console.log(countries);

// console.log(countries.length);

// countries[2] = "India";
// console.log(countries);

// india
// japan
// china

// countries = ["india", "japan", "china"];
// countries[10] = "australia";
// what is the length of countires array
// console.log(countries);
// 11
// console.log(countries.length);
// 11

// countries = ["india", "japan", "china", "usa", "uk", "france"];

// console.log(countries);
// console.log(countries.length);
// console.log(countries[3]);
// console.log(countries[10]);

// countries[10] = "australia";
// console.log(countries);

var x = [16, 25, 29, 7, 18];
// console.log(x[3]); // 7
// console.log(x.length); // 5

// for (let i = 0; i < x.length; i++){
// console.log(x[i])
// }

// last to 0 index

// for (let i = x.length - 1; i >= 0; i = i - 1){
//     console.log(x[i])
// }

// for in loop

countries = ["india", "japan", "china", "usa", "uk", "france"];
// for (let i in countries){
//     console.log(countries[i]);
// }

// for (let i = 0; i <countries.length; i = i + 1){
//     if (i % 2 == 0){
//         console.log(countries[i])
//     }
// }

// for of loop
// for (let name of countries){
//     console.log(name);
// }

numbers = [10, 20, 30, 40, 50];
// for each loop

// intha function name ill soo ithukku function expression nu solrom.
// numbers.forEach(function(n) { // function expression
//     console.log(n);
// });

var printDouble = function (n) {
  console.log(n * 2);
};

// Option 1 using loop
for (let i in numbers) {
  printDouble(numbers[i]);
}
// option 2 using for each
console.log("Using for each method");
numbers.forEach(printDouble);
