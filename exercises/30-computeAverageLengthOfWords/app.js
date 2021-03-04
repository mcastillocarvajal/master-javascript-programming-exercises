// Write your function here

function computeAverageLengthOfWords(w1,w2){
    let str1 = String(w1);
    let str2 = String(w2);
    return (str1.length + str2.length) / 2;
};

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);