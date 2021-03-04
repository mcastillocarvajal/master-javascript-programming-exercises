// Write your function here

function isEvenLength(w){
    let str = String(w);
    if(str.length % 2 === 0) return true;
    else return false;
};


var output = isEvenLength('wow');
console.log(output);