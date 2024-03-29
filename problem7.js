/*
* 10001st prime

* Problem 7
*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
* * */
console.time('Execution time');
const nThPrimeNumber = 10001;
const primeNumbers = [];
let i = 2;

function is_prime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

while (true) {
  if (is_prime(i)) {
    primeNumbers.push(i);
    if (primeNumbers.length === nThPrimeNumber) {
      break;
    }
  }
  i++;
}
console.log(`Problem 7 : total primes : ${primeNumbers}`)
console.log(`Problem 7 : answer : ${primeNumbers.pop()}`);
console.timeEnd('Execution time');
