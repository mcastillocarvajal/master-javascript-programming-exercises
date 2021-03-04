// Write your function here

function isSameLength(w1, w2){
    let str1 = String(w1);
    let str2 = String(w2);
    if(str1.length === str2.length) return true;
    else return false;

};


var output = isSameLength('words', 'super');
console.log(output);