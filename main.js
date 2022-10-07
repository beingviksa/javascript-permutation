function getPermutations(input) {
  // Time Complexity: O(n) n is input string size
  var result = [];
  var temp = [];

  // return the same input string if there is no *
  if (input.indexOf("*") === -1) return input;

  // if there is * in input string
  if (input.match(/\*/)) temp.push(input);

  while (temp.length) {
    var wildStr = temp.pop();

    for (var i = 0; i < 2; i++) {
      // repalce the * with 0 and 1
      var str = wildStr.replace(/\*/, i);
      if (str.match(/\*/)) temp.push(str);
      else result.push(str);
    }
  }
  return result;
}

module.exports = getPermutations;
