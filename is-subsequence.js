/**
 * Write a function called isSubsequence which takes in two strings and
 * checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string,
 * without their order changing.
 *
 * Constraints:
 * Time Complexity - O(N + M)
 */
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  // Iterate through str2 (since it's the longer one)
  while (j < str2.length) {
    // If characters match, move both pointers
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;

    // If all characters of str1 are found in str2 in order
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
