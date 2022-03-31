// function upperStr(str) {
//   // base case
//   if (str === "") {
//     return "";
//   }

//   // recursive case
//   const newChar = str[0].toUpperCase(); // capitalizes the first character of "str" variable​
//   // Concatenate new data with reduced string for next iteration...
//   const capStr = newChar + upperStr(str.slice(1));
//   console.log(capStr);
//   return capStr; // takes a slice of the "str" at index 1 and onwards
// }

// const myArr = [2, 3, 4, 5, 6];
// myArr.slice(1); // [3, 4, 5, 6];
// myArr.slice(2); // [4, 5, 6];
// myArr.slice(1, 3); // [3, 4];​
// const myStr = "hello";
// myStr.slice(1); // "ello"
// myStr.slice(2); // "llo"
// myStr.slice(1, 3) // "el"

// console.log("returned solution :", upperStr("hello"));​
// bottom-up approach - breaks the problem down and constructs solution on the way up
// 1st call
// upperStr("hello")
// const newChar = str[0].toUpperCase() === "H"
// return newChar + upperStr("ello") === H + upperStr("ello") === "H" + "ELLO" === "HELLO"

// 2nd call
// upperStr("ello")
// const newChar = "E"
// return "E" + upperStr("llo") === "E" + "LLO" === "ELLO"​
// 3rd call
// upperStr("llo")
// const newChar = "L"
// return "L" + upperStr("lo") === "L" + "LO" === "LLO"

// 4th call
// upperStr("lo")
// const newChar = "L"
// return "L" + upperStr("o") === "L" + "O" === "LO"​
// 5th call
// upperStr("o")
// const newChar = "O"
// return "O" + upperStr("") === "O" + "" === "O"

// 6th call
// upperStr("")
// return ""

// time complexity - O(n)
function upperStr(str, result = "") {
  if (str === "") {
    return result;
  }
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration
  return upperStr(str.slice(1), result + newChar);
}
console.log(upperStr("hello"));

// top-down approach - build the solution as you go down and return it in the base case
// 1st function call
// upperStr("hello", result="")
// const newChar = "H"
// return upperStr("ello", "" + "H"); === return "HELLO"
​
// 2nd call
// upperStr("ello", result="H")
// const newChar = "E"
// return upperStr(str.slice(1), "H" + "E"); === return "HELLO"

// ...

// 6th call
// upperStr("", result="HELLO")
// return result === return "HELLO"

// 247
// decimal system
// 100 10 1

// 10^0 === 1
// 10^1 === 10
// 10^2 === 100
// 10^3 === 1000
// ...

// 2*(100) + 4*(10) + 1*(7) = 247

// 207
// 2*(100) + 0*(10) + 1*(7) = 207

// Binary system is similar but represented as a base of 2

// 2^0 === 1
// 2^1 === 2
// 2^2 === 4
// 2^3 === 8
// 2^4 === 16
// 2^5 === 32
// 2^6 === 64
// 2^7 === 128
// 2^8 === 256

// 247
// 247 - 128 = 119 - 64 = 55 - 32 = 23 - 16 = 7 - 0 = 7 - 4 = 3 - 2 = 1 - 1 = 0

// 11110111 === 247