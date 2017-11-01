function characterPositioning(str) {
  // 3. initialize a return value of the correct type
  var indices = {};

  // 4. iterate over the arguments
  for (var i = 0; i < str.length; i++) {
    // 5. modify the return value
    var letter = str[i];
    // skip the spaces
    if (letter === ' ') {
      continue;
    }
    // if the letter has not been seen yet...
    if (indices[letter] === undefined) {
      // set the count for the letter to 1
      indices[letter] = [i];

    } else {
      // if the output already has the letter then increment by 1
      indices[letter].push(i);
    }
  }
  // 6. Return the result
  return indices;
}

console.log(characterPositioning('lighthouse in the house'));