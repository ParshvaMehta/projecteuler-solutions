/*
* Longest Collatz sequence
* Problem 14
*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
* * */
console.time('Execution time');
let maxNumberChain = 0;
let maxNumber = 0;
const handleIsEven = (n) => {
  return n / 2;
}

const handleIsOdd = (n) => {
  return 3 * n + 1;
}

const getChain = (n, factors) => {
  if (n === 1) {
    return factors;
  }
  const num = n % 2 === 0 ? handleIsEven(n) : handleIsOdd(n);
  return getChain(num, factors + 1);
}

for (let i = 1; i < 1000000; i++) {
  const maxChain = getChain(i, 1);
  if (maxChain > maxNumberChain) {
    maxNumberChain = maxChain;
    maxNumber = i;
  }
}

console.log(`Problem 14 : answer : ${maxNumber} and chain of ${maxNumberChain} `);
console.timeEnd('Execution time');
