// Question 1
// Create an array of 5 numbers and print the array.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// Question 2
//  Create an array of 4 strings. Print the 2nd and 4th elements.
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[1]);
console.log(fruits[3]);

// Question 3
// Create an array of 3 elements. Change the 2nd element to "modified" and print the array.
let movies = ["singam", "leo", "coolie", "Thuglife"];
console.log(movies);

movies[3] = "Jana Nayagan";
console.log(movies);

// Question 4
// Write a program to print the length of an array containing 7 elements.
let colors = ["red", "blue", "green", "yellow", "black", "white", "purple"];
console.log(colors.length);

// Question 5
// Write a program that iterates over an array of numbers and prints each element.
let mark = [85, 90, 78, 92, 88];
for (let i = 0; i < mark.length; i = i + 1) {
  console.log(mark[i]);
}

// Question 6
// Write a program to sum all elements of an array of numbers and print the result.
let scores = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < scores.length; i = i + 1) {
  sum = sum + scores[i];
}
console.log("Sum:", sum);

// Question 7
// Write a program that uses the `for...of` loop to print each element in an array of strings.
let cities = ["New York", "india", "London", "Tokyo"];
for (let city of cities) {
  console.log(city);
}
