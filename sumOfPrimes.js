/*
  Summation of primes
  Problem 10
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/


function sumOfPrimesWithSieve(n) {
    var allNums = [], primes = [];
    const rootN = Math.sqrt(n);

    for (var i = 0; i < n; i++) {
        allNums.push(true);
    }
    for (var i = 2; i <= rootN; i++) {
        if (allNums[i]) {
            for (var j = i * i; j < n; j += i) {
                allNums[j] = false;
            }
        }
    }
    for (var i = 2; i < n; i++) {
        if(allNums[i]) {
            primes.push(i);
        }
    }

    return primes.reduce((a, b) => {
      return a + b;
    });
};

console.time('SumOfPrimes');
console.log(sumOfPrimesWithSieve(2000000));
console.timeEnd('SumOfPrimes');



























/* END */
