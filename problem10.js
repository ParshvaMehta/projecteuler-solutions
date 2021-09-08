/*
* Summation of primes
* Problem 10
*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
* * */
console.time('Execution time');
const twoMillion = 2000000;
let sum = 0;

function is_prime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i < twoMillion; i++) {
  if (is_prime(i)) {
    sum += i;
  }
}
console.log(`Problem 10 : answer : ${sum}`);
console.timeEnd('Execution time');
