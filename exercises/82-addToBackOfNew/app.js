// Write your function here

function addToBackOfNew(array, num){
    let newArray = [];
    for(a in array){
        newArray.push(a);
    };
    newArray.push(num);
    return newArray;
};

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]