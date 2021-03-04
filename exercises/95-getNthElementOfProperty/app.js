
// Write your function here

function getNthElementOfProperty(obj, key, nth){
    return obj.key[nth];

}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2