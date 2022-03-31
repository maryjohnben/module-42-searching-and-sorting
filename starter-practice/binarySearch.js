const search = require("./binaryIndexOf");

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];
//(0+13)/2 position 6 middle = 44 so 274 bigger than 44 move lower 1 position right of index to 81 ie 7i
//at position 7 it is 81, (7+13)/2 = 10 position is 504 middle and 274 smaller thus upper move 1 left to 9i ie 274
// 8+9/2 = 8middle is 149 smaller than 274 now lower at 9 and upper at 9 
//so 9+9/2 = 9 and 274

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at index", index);

    if (element === target) {
      return 0;
    }
    if (element < target) {
      return 1;
    }
    if (element > target) {
      return -1;
    }
  };
}

console.log(search(forNumber(274), elements));