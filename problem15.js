/*
* Lattice paths
* Problem 15
*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
*
* How many such routes are there through a 20×20 grid?
* * */
console.time('Execution time');
const factorial = (n) => {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}
// REF :  https://www.robertdickau.com/manhattan.html
const binomialCoff = (n) => {
  const twoNFactorial = factorial(2 * n);
  const nFactorial = factorial(n);
  return twoNFactorial / Math.pow(nFactorial, 2);
}

const fact = binomialCoff(20);
console.log(`Problem 15 : answer : ${fact}`);
console.timeEnd('Execution time');
