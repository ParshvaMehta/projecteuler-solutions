/*
* Largest palindrome product
* Problem 4
*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
* * */
console.time('Execution time');
let largestPalindromeNumber = 0;
let maxI = 1
for (let i = 999; i > maxI; i--) {
  for (let j = 999; j > 1; j--) {
    const mul = (i * j);
    const reverse = parseInt(mul.toString().split("").reverse().join(""));
    if (mul === reverse && mul > largestPalindromeNumber) {
      maxI = j;
      largestPalindromeNumber = mul;
      break;
    }
  }
}

console.log(`Problem 4 : answer : ${largestPalindromeNumber}`);
console.timeEnd('Execution time');
