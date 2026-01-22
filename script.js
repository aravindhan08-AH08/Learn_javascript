// Find the tempature
let tempature = [25, 28, 30, 24, 26, 23, 31];
// This is For loop method
// let output = [];
// for (let i = 0; i < tempature.length; i = i + 1){
//     if (tempature[i] > 25) {
//         output.push(tempature[i]);
//     }
// }
// console.log(output);

// This is filter method
// New method and faster method
// let maxTemp = tempature.filter((t) => {
//     let hightemp = 0;
//     if (t > 25) {
//         hightemp = t;
//         return hightemp;
//     }
// });
// console.log(maxTemp);

// let numbers = [55, 26, 17, 0, 23, 9, 0, 81];
// let output = []
// // This array remove the zero value but use the filter method
// let nonZero = numbers.filter((n) => {
//     if (n !== 0) {
//         output.push(n);
//     }
// });
// console.log(output)

// let marks = [45, 67, 89, 90, 34, 23, 78, 56];

// add 7 marks in each subject
// let addMarks = marks.map((m) => {
    // return m + 7;
    // add 7 marks to the entries less than 60
//     if (m < 60) {
//         return m + 7;
//     }
//     else {
//         return m;
//     }
// });

// console.log(addMarks);

// capital and country change to country to capital
let countries = {
    'india': 'delhi',
    'japan': 'tokyo',
    'france': 'paris',
    'italy': 'rome',
    'australia': 'canberra'
}

// Output 
/*{
'india': 'delhi',
'france': 'paris',
'australia': 'canberra'
}*/

// let output = {};
// for (let key of Object.keys(countries)) {
//     let country = key;
//     let capital = countries[key]
//     console.log(country, capital);
// }

// another method
let output = {};
for (let key of Object.keys(countries)) {
    let country = key;
    let capital = countries[key]
    output[capital] = country;
    // delete in JavaScript
    delete countries[key];
}

console.log(output);
