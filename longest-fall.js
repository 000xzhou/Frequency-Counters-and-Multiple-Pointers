/**
 * Write a function called longestFall, which accepts an array of integers,
 * and returns the length of the longest consecutive decrease of integers.
 */
function longestFall(arr) {
  if (arr.length === 0) return 0;
  // each time a new start. add new longest to ans arr. reset longest to 1
  const ans = [];
  let longest = 1;
  for (let i = 1; i < arr.length; i++) {
    // Add count to longest if int is smaller than the next one else add longest to arr and reset longest to 1
    if (arr[i - 1] > arr[i]) {
      longest++;
    } else {
      ans.push(longest);
      // Reset
      longest = 1;
    }
  }
  // Push the final fall sequence length after loop
  ans.push(longest);

  return Math.max(...ans);
}

longestFall([5, 3, 1, 3, 0]); // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]); // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]); // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]); // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]); // 5, 9-8-7-6-5 is the longest
longestFall([]); // 0

[5, 4, 3, 4, 3, 2, 1];
