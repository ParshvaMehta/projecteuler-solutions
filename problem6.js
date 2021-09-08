/*
* Sum square difference

* Problem 6
*
The sum of the squares of the first ten natural numbers is,

The square of the sum of the first ten natural numbers is,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
* * */
console.time('Execution time');
let sumOfNumber = 0;
let sumOfSquares = 0;
for (let i = 1; i <= 100; i++) {
  sumOfNumber += i;
  sumOfSquares += Math.pow(i, 2);
}
console.log(`Problem 6 : answer : ${Math.pow(sumOfNumber, 2) - sumOfSquares}`);
console.timeEnd('Execution time');
