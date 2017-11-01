

// 1. name the function
// 2. list the arguments to the function
function countLetters(str) {
  // 3. initialize a return value of the correct type
  var letterCounts = {};

  // 4. iterate over the arguments
  for (var i = 0; i < str.length; i++) {
    // 5. modify the return value
    var letter = str[i];
    // skip the spaces
    if (letter === ' ') {
      continue;
    }
    // if the letter has not been seen yet...
    if (letterCounts[letter] === undefined) {
      // set the count for the letter to 1
      letterCounts[letter] = 1;
    } else {
      // if the output already has the letter then increment by 1
      letterCounts[letter] = letterCounts[letter] + 1;
    }
  }
  // 6. Return the result
  return letterCounts;
}

console.log(countLetters('lighthouse in the house'));
