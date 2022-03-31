// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// find the nth fibonacci number in the sequence
// memoization + dynamic programming
// cach previously computed values
// no need to repeat work that has been done before

// before memoization
// time complexity - exponential O(2^n)​
// after memoization
// time complexity - linear O(n)
// space complexity - linear O(n)

function fibonacci(n, values = []) {
  // look into the array to see if we previously
  // computed for nth in the sequence
  if (values[n] != null) {
    return values[n]; // return the previously computed fib number
  }
  // base case
  if (n < 1) return 0;

  let result = 0;
  // if n is less than or equal to 2, result is 1
  if (n <= 2) {
    result = 1;
  } else {
    // compute the fib sequence
    result = fibonacci(n - 1, values) + fibonacci(n - 2, values);
  }
  // store the previously computed results
  values[n] = result;
  return result;
}

// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13
// console.log(fibonacci(8)); // 21
console.log(fibonacci(80));