// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
console.time('Execution time');
let sum =0;
const min = 1;
const max = 1000;
for(let i=min;i<max;i++){
  if(i%3===0 || i%5===0){
    sum = sum + i;
  }
}
console.log(`Problem 1 : answer : ${sum}`);
console.timeEnd('Execution time');
