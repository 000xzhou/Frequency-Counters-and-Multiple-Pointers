// Write a function called constructNote, which accepts two strings, a message and some letters.
//The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// **Constraints**:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

function constructNote(message, letters) {
  // no letters no message
  if (letters.length === 0) return false;

  // get count of the char for each
  const messageCount = countletters(message);
  const lettersCount = countletters(letters);

  // loop though the char and make sure message didn't extend letters
  for (let char of messageCount.keys()) {
    if (messageCount.get(char) > lettersCount.get(char)) {
      return false;
    }
  }
  return true;
}

const countletters = (word) => {
  let count = new Map();

  // loop though each char and add it to map if it don't exist
  for (let char of word) {
    // count.set(char, (count.get(char) || 0) + 1);    //I feel this is hard to read
    if (count.has(char)) {
      count.set(char, count.get(char) + 1);
    } else {
      count.set(char, 1);
    }
  }
  return count;
};

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
