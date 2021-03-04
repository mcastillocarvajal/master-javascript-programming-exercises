// Write your function here

function findMinLengthOfThreeWords(w1, w2, w3){
    let min = Math.min(w1.length, w2.length, w3.length);
    return min;

}

var output = findMinLengthOfThreeWords('e', 'be', 'see');
console.log(output); // --> 1