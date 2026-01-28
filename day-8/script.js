// Excersize Problem's
// Question 1

let coordinates = [34.05522, -118.2437, 89];

let lat = coordinates[0];
let lon = coordinates[1];
let alt = coordinates[2];

console.log(`Lat: ${lat}, Lon: ${lon}, Alt: ${alt}`);

// let [lat, lon, alt] = coordinates;
// console.log(`Lat: ${lat}, Lon: ${lan}, Alt: ${alt}`);

// Question 2

let user = {
  id: 101,
  profile: {
    username: "coder_99",
    avatar: "image.png",
  },
};

let username = user.profile.username;
let avatar = user.profile.avatar;

console.log(`Username: ${username}, Avatar: ${avatar}`);

let { id, profile } = user;
// let {username, avatar} = profile;

console.log(`Username: ${username}, Uploaded ${avatar}`);

// Question 3

const library = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Ponniyin Selvan", author: "Kalki Krishnamurthy" },
];

// Method 1

for (let book of library) {
  console.log(`${book.title} by ${book.author}`);
}

// Question 4

const account = {
  id: "USR-9921",
};
