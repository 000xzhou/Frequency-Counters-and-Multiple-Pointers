// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (letters.length === 0) return false;

  const messageCount = countletters(message);
  const lettersCount = countletters(letters);

  for (let char of messageCount.keys()) {
    if (messageCount.get(char) > lettersCount.get(char)) {
      return false;
    }
  }
  return true;
}
const countletters = (word) => {
  let count = new Map();
  for (let char of word) {
    if (count.has(char)) {
      count.set(char, count.get(char) + 1);
    } else {
      count.set(char, 1);
    }
  }
  return count;
};

// Write a function called constructNote, which accepts two strings, a message and some letters.
//The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// **Constraints**:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
