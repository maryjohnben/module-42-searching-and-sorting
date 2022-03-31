const indexOf = require("./indexOf");

////linear search is classic brute force algorithm//////
const people = [
  {
    id: 1,
    first_name: "Monah",
    last_name: "Yarnall",
    age: 17,
  },
  {
    id: 2,
    first_name: "Daphne",
    last_name: "McGaugey",
    age: 81,
  },
  {
    id: 3,
    first_name: "Walker",
    last_name: "Bucknell",
    age: 81,
  },
];

//as this is done and isMatch is used new functions
//are not needed each time complex data types are passed in. Here array of object can still be calculated
function personIs81(person) {
  //this is passed in isMatch
  return person.age === 81;
}

console.log(indexOf(personIs81, people));

function numberIs5(value) {
  //this is passed isMatch but as simple array
  return value === 5;
}

// console.log(indexOf(numberIs5, [1, 3, 51, 7, 9, 5]));



