/* 

*/

// function addTwoNumbers(a, b){
//     let sum = a + b;
//     return sum;
// }

// console.log(addTwoNumbers(3, 5)) // 8

// write function to
// function 1 -> areaOfRectangle()
// find area of rectangle
// inputs -> length ,breadth
// output -> area
// test case -> 20,30 -> 600

function areaOfRectangle(length, breath) {
  let area = length * breath;
  return area;
}

console.log(areaOfRectangle(20, 30));

// write function to
// function 2-> perimeterOfRectangle()
// find perimeter of rectangle
// inputs -> length ,breadth
// output -> perimeter
// test case -> 5,10 -> 2 * (l + b)= 2*(5+10) = 2 *(15) = 30

// function declaration
function perimeterOfRectangle(length, breath) {
  let perimeter = 2 * (length + breath);
  return perimeter;
}

console.log(perimeterOfRectangle(5, 10));

let areaOfCircle = function (length, breath) {
  let area = length * breath;
  return area;
};

console.log(areaOfRectangle(20, 30));

let perimeterOfRectangle = function (length, breath) {
  let perimter = 2 * (length + breath);
  return perimeter;
};

console.log(perimeterOfRectangle(5, 10));

// arrow function
let areaOfRectangle = (length, breath) => {
  let area = length * breath;
  return area;
};
console.log(areaOfRectangle(20, 30));

let perimeterOfRectangle = (length, breath) => {
  let perimeter = 2 * (length + breath);
  return perimeter;
};

console.log(perimeterOfRectangle(5, 10));
