// Find the tempature
let tempature = [25, 28, 30, 24, 26, 23, 31];
// This is For loop mathod
// let output = [];
// for (let i = 0; i < tempature.length; i = i + 1){
//     if (tempature[i] > 25) {
//         output.push(tempature[i]);
//     }
// }
// console.log(output);

// This is filter method
// New method and faster method
let maxTemp = tempature.filter((t) => {
    let hightemp = 0;
    if (t > 25) {
        hightemp = t;
        return hightemp;
    }
});
console.log(maxTemp);

let numbers = [55, 26, 17, 0, 23, 9, 0, 81];
let output = []
// This array remove the zero value but use the filter method
let nonZero = numbers.filter((n) => {
    if (n !== 0) {
        output.push(n);
    }
});
console.log(output)