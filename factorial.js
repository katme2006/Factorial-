const factorial = (num) => {

  if (num === 0) {
    return 1;
  }

  let sum = 1;
  let multiplier = 1;
  for (i = 1; i <= num; i++) {
    multiplier = i;
    sum *= multiplier;
  }

  return sum;
}

console.log(factorial(0)); //1
console.log(factorial(3)); //6
console.log(factorial(7)); //5040

module.exports = factorial;
