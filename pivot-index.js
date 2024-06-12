/**
 * Write a function called pivotIndex which accepts an array of integers,
 * and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right.
 * If there are more than one valid pivot index, return the smallest value.
 *
 * Constraints
 * Time Complexity: O(N)
 */
function pivotIndex(arr) {
  // Calculate the total sum of the array.
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // check if the left sum equals the sum - left sum - current element = right sum
    if (leftSum === sum - leftSum - arr[i]) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

pivotIndex([1, 2, 1, 6, 3, 1]); // 3
pivotIndex([5, 2, 7]); // -1  no valid pivot index
pivotIndex([-1, 3, -3, 2]); // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
