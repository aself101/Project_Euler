/*
  Largest prime factor - Problem 3
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

function findLargestPrimeFactor(n) {
  var candidate = 1; candidateNums = [];

  function isPrime(n) {
    var i = 2;
    for (; i <= n - 1; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    if (i === n) return true;
  }

  for (let i = 0; i <= Math.floor(n/2);i++) {
    if (isPrime(i)) {
      if (Number.isInteger(n / i)) {
        candidateNums.push(i);
        candidate *= i;
      }
    }
    if (candidate === n) break;
  }
  return candidateNums.reduce((a, b) => {
    if (a > b) return a;
    return b;
  });
}


console.time('Largest-Prime-Factor');
console.log(findLargestPrimeFactor(600851475143));
console.timeEnd('Largest-Prime-Factor');
