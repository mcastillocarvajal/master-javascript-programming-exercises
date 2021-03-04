function getLengthOfTwoWords(word1, word2) {
  // your code here

    let str1 = String(word1);
    let str2 = String(word2);
  return str1.length + str2.length;

};

var output = getLengthOfTwoWords('some', 'words');
console.log(output);