/*
* Smallest multiple
* Problem 5
*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
* * */
console.time('Execution time');
let number = 0;
let i = 2;
while (true) {
  if (
      i % 2 === 0 &&
      i % 3 === 0 &&
      // i % 4 === 0 &&  // 2*2 = 4
      i % 5 === 0 &&
      i % 7 === 0 &&
      // i % 8 === 0 &&  // 2*2*2 = 8
      i % 9 === 0 &&  // 3*3 = 9
      i % 11 === 0 &&
      i % 13 === 0 &&
      i % 16 === 0 &&  // 2*2*2*2 = 16 <- 2 power 4 is the maximum number
      i % 17 === 0 &&
      i % 19 === 0
  ) {
    number = i;
    break;
  }
  i++;
}

console.log(`Problem 5 : answer : ${number}`);
console.timeEnd('Execution time');
