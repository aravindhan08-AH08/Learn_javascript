// let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i = i + 1){
//     console.log(arr[i])
// }

// let el = 0
// // For in loop
// for(let index in arr){
//     console.log(arr[index])
// }

// // For of loop
// for(let value of arr){
//     console.log(value)
// }

var a = [1, 2, 3];
var b = ["a", "b", "c"];

// This is use only use array concat method
var result = [...a, ...b];
console.log(result);
// [1,2,3,'a',b','c']

var userDetails = {
  name: "Tony Stark",
  accupation: "Iron Man - Avenger",
};

var skills = {
  skills: ["Businessman", "Philantrophist"],
  netWorth: 20000000,
};

var superHero = {
  ...userDetails,
  ...skills,
};

console.log(superHero);

let user = { name: "John", age: 30 };
// add one more key value -> "isAdmin": true to the above user
var newUser = { ...user, isAdmin: true };
console.log(newUser);
// create two variable 'name' and 'age' from the user using rest operator
var { name, age } = user;
console.log(name, age);

const response = {
  username: "john",
  token: "abc123",
  roleID: "admin",
  profile: "manager",
};

// username and token -> one separate object -> credentials
// roleID and profile -> another separate object -> myProfile
let { username, token, ...myProfile } = response;
console.log(myProfile);
