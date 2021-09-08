/*
* Special Pythagorean triplet
* Problem 9
*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
* * */
console.time('Execution time');
let mul = 0;
for (let a = 1; a <= 1000; a++) {
  if (mul !== 0) {
    break;
  }
  for (let b = a + 1; b <= 1000; b++) {
    if (mul !== 0) {
      break;
    }
    for (let c = b + 1; c <= 1000; c++) {
      if (a + b + c === 1000 && (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2))) {
        console.log(`Problem 9 : the perfect triplet : ${a} + ${b} + ${c} = 1000`);
        mul = a * b * c;
        break;
      }
    }
  }
}
console.log(`Problem 9 : answer : ${mul}`);
console.timeEnd('Execution time');
