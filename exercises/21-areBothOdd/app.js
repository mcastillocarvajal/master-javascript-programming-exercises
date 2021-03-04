// Write your function here

function areBothOdd(n1, n2){
    if (n1 % 2 !== 0 && n2 % 2 !== 0) return true;
    else return false;
};

var output = areBothOdd(1, 3);
console.log(output);