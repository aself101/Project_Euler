/*
  A palindromic number reads the same both ways. The largest palindrome made from the product
  of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

function palindromeCheck() {
  const LARGEST_3_DIGIT = 999;
  var product;
  var palindromes = [];
  var productString, firstHalf, secondHalf;


  for (let i = 100; i < LARGEST_3_DIGIT; i++) {
    for (let j = 100; j < LARGEST_3_DIGIT; j++) {
      product = i * j;
      productString = product.toString();
      // Check the length of the product; if even split it check if one half equals the other
      if (productString.length % 2 === 0) {
        firstHalf = productString.split('').slice(0, productString.length/2).join('');
        secondHalf = productString.split('').slice(productString.length/2, productString.length).reverse().join('');
        if (firstHalf === secondHalf) {
          palindromes.push(product);
        }
      }
    }
  }

  return palindromes.reduce((a, b) => {
    if (a > b) return a;
    else return b;
  });
}
console.time('palindrome');
console.log(palindromeCheck());
console.timeEnd('palindrome');
























/* END */
