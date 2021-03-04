// Write your function here

function computeAverageOfNumbers(array){
    let sum = array.reduce((s, i) => s + i);
    return sum / array.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3