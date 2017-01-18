/*
  Special Pythagorean triplet
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
  a^2 + b^2 = c^2
  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/

function findPythagoreanTriplet(n) {
  var a = 1, b = 1, c = 1;

  for (;a < n / 2; a++) {
    for (;b < n / 2; b++) {
      for (;c < n / 2; c++) {
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          if (a + b + c === n) {
            return a * b * c;
          }
        }
      }
      c = 1;
    }
    b = 1;
  }
}

console.time('Pythagorean-triplet');
console.log(findPythagoreanTriplet(1000));
console.timeEnd('Pythagorean-triplet');
