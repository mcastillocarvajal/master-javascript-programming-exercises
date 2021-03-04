// Write your function here

function findMaxLengthOfThreeWords(w1, w2, w3){
    let max = Math.max(w1.length, w2.length, w3.length);
    return max;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3