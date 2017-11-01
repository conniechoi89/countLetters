function characterPositioning(str) {

  var indices = {};


  for (var i = 0; i < str.length; i++) {

    var letter = str[i];

    if (letter === ' ') {
      continue;
    }

    if (indices[letter] === undefined) {

      indices[letter] = [i];

    } else {

      indices[letter].push(i);
    }
  }

  return indices;
}

console.log(characterPositioning('lighthouse in the house'));