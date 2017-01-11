function findPrime(n) {
  var count = 1;
  var primeCount = 0;

  function isPrime(n) {
    var i = 2;
    for (; i <= n - 1; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    if (i === n) return true;
  }

  while (true) {
    count++;
    if (isPrime(count)) {
      primeCount++;
      if (primeCount === n) {
        return count;
      }
    }
  }
}

console.time('10001st');
console.log(findPrime(10001));
console.timeEnd('10001st');
