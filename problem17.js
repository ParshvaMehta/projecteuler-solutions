/*
* Number letter counts
* Problem 17
*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

* * */
console.time('Execution time');
let sum = 0;
const units = ['zero',
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/* Array of scales as words */
const scales = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

const handleOnes = (d) => {
  return units[parseInt(d)];
}

const handleTens = (d) => {
  const str = d.toString();
  const [t, o] = str.split('');
  if (parseInt(o) === 0) {
    return tens[parseInt(t)];
  }
  return tens[parseInt(t)] + units[parseInt(o)];
}

const handleThousand = (d) => {
  const str = d.toString();
  const [h, t, o] = str.split('');
  const hundredsInWord = handleOnes(h) + scales[0];
  if (parseInt(t) === 0 && parseInt(o) === 0) {
    return hundredsInWord;
  }
  const mod = d % 100;
  if (mod < 20) {
    return hundredsInWord + 'and' + handleOnes(mod);
  }
  return hundredsInWord + 'and' + handleTens(mod);
}

const handleTenThousand = (d) => {
  const str = d.toString();
  const [th, h, t, o] = str.split('');
  if (parseInt(h) === 0 && parseInt(t) === 0 && parseInt(o) === 0) {
    return handleOnes(th) + scales[1];
  }
  return handleOnes(th) + scales[1] + handleThousand(d % 1000);
}

const digitToWord = (d) => {
  if (d < 20) {
    return handleOnes(d);
  }
  if (d >= 20 && d < 100) {
    return handleTens(d);
  }
  if (d >= 100 && d < 1000) {
    return handleThousand(d);
  }
  if (d >= 1000 && d < 10000) {
    return handleTenThousand(d);
  }
  return '';
}

for (let i = 1; i <= 1000; i++) {
  sum += digitToWord(i).length;
  // console.log(i, digitToWord(i));
}

console.log(`Problem 17 : answer : ${sum}`);
console.timeEnd('Execution time');
