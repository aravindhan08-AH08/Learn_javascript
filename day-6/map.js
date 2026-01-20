// let n = [2,4,6,8,10];
// // arrowfunction or 
// n.forEach((el)) => {
//     console.log(el*2);
// }

// let marks = [87, 91, 88, 93, 81];
// marks.map((m) => {
//     let newMarks = m + 5;
//     console.log(newMarks);
// })

fruits = ["apple", "banana", "orrange"];
// convert all the fruits to uppercase
// don't use map function
// fruits.forEach(el => {
//     console.log(el.toUpperCase());
// });

// Use the map function to convert all the fruits to uppercase
// fruits.map((ele) => {
//     let upperfruit = ele.toUpperCase();
//     console.log(upperfruit);
// })

// array of numbers to string to convert all the number
// Use the map function
let n = ["87", "91", "88", "93", "81"];
// n.map((num) => {
//     let number = Number(num);
//     let mark = Math.max(number);
//     console.log(number)
// })
// Find the Highest number from the array
// let numbers = [45, 78, 12, 67, 89, 13];
// let highest = Math.max(...numbers);
// console.log("Highest number is: " + highest);

// ithu ena na map function use panni orey array la ye yellam modify pannrathu epdi tha.
// let revisedmark = marks.map((m) => {
//     let marks = m + 5;
//     return marks;
// });
// console.log(revisedmark);

let numbers = ['1', '2', '3']
let revisedmark = numbers.map((num, index) => {
    console.log('index: ' + index);
    console.log('number: ' + num);
});

let a = numbers.map((num, index, arr) => {
    console.log('array: ' + arr);
});

