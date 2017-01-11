/*
 Smallest Multiple: Problem 5
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// Start a count from 1 and increment
//

function smallestMultiple() {
  var count = 0;
  while (true) {
    count++;
    if ( (count % 1 === 0) && (count % 2 === 0) && (count % 3 === 0) && (count % 4 === 0) &&
        (count % 5 === 0) && (count % 6 === 0) && (count % 7 === 0) && (count % 8 === 0) &&
        (count % 9 === 0) && (count % 10 === 0) && (count % 11 === 0) && (count % 12 === 0) &&
        (count % 13 === 0) && (count % 14 === 0) && (count % 15 === 0) && (count % 16 === 0) &&
        (count % 17 === 0) && (count % 18 === 0) && (count % 19 === 0) && (count % 20 === 0) ) {
        return count;
    }
  }
}
console.time('Smallest-Multiple');
console.log(smallestMultiple());
console.timeEnd('Smallest-Multiple');































/* END */
