/**
 *
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Constraints
 * Time Complexity - O(N + M)
 */
function sameFrequency(num1, num2) {
  const num1Len = Math.ceil(Math.log10(num1 + 1));
  const num2Len = Math.ceil(Math.log10(num2 + 1));
  if (num1Len !== num2Len) return false;

  const num1Count = sort(num1.toString());
  const num2Count = sort(num2.toString());
  if (num1Count.size !== num2Count.size) return false;

  for (let num of num1Count.keys()) {
    if (num1Count.get(num) !== num2Count.get(num)) return false;
  }
  return true;
}

const sort = (num) => {
  let count = new Map();
  for (let n of num) {
    if (count.get(n)) {
      count.set(n, count.get(n) + 1);
    } else {
      count.set(n, 1);
    }
  }
  return count;
};

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
