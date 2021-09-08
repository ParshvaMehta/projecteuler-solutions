/*
* Largest prime factor
* Problem 3
*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
* * */
console.time('Execution time');
const number = 600851475143;

function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}

const pf = prime_factors(number);
console.log(`Problem 3 : total prime factor of ${number} are [${pf}]`);
console.log(`Problem 3 : answer : ${pf.pop()}`);
console.timeEnd('Execution time');
