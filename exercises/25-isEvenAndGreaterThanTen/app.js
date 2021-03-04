// Write your function here


function isEvenAndGreaterThanTen(n){
    if(n % 2 === 0 && n > 10) return true;
    else return false;
};

var output = isEvenAndGreaterThanTen(13);
console.log(output);