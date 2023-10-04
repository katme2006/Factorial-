const factorial = require("./factorial.js");

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(4) === 24);
console.log(factorial(8) === 40320);
console.log(factorial(18) === 6402373705728000);
// Test how high of a number your program can calculate. Can you push it further?

describe("Testing Factorial with various positive integers", () => {
  test("finds factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });
  test("finds factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });
  test("finds factorial of 2", () => {
    expect(factorial(2)).toBe(2);
  });
  test("finds factorial of 3", () => {
    expect(factorial(3)).toBe(6);
  });
  test("finds factorial of 7", () => {
    expect(factorial(7)).toBe(5040);
  });
});
