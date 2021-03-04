// Write your function here

function isOddLength(w){
    let str = String(w);
    if(str.length % 2 !== 0) return true;
    else return false;
};



var output = isOddLength('special');
console.log(output);