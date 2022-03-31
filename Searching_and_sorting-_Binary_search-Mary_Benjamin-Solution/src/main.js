const search = require("./indexOf");

const numbers = require("./numbers.json");

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at index", index);
//thing in element index is matching target
    if (element === target) {
      return 0;
    }
    //whatever in the particular element index is less than target
    if (element < target) {
      return 1;
    }
    //whatever in the particular element index is more than target this number will be later compared in indexOf
    if (element > target) {
      return -1;
    }
  };
}

console.log(search(forNumber(35077), numbers));

