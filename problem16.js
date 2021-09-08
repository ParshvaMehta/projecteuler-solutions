/*
* Power digit sum
* Problem 16
*
* 2 rest to 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 rest to 1000?
* * */
console.time('Execution time');
const powerSum = (number, power) => {
  const pow = BigInt(Math.pow(number, power));
  const str = pow.toString(10);
  // let sum = 0;
  // for (let i = 0; i < str.length; i++) {
  //   sum += parseInt(str[i]);
  // }
  // return sum;
  return str.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

const powerDigitSum = powerSum(2, 1000);
console.log(`Problem 16 : answer : ${powerDigitSum}`);
console.timeEnd('Execution time');
