// Write your function here

function getElementsLessThan100AtProperty (obj, key) {
    let newArray = [];
    for (i=0; i<obj.key.length; i++) {
        if (obj.key[i] < 100) {
            newArray.push(obj.key[i]);
        }
    }
    return newArray;
}

var obj = {
  key: [1000, 10, 50, 10, 20, 6, 10, 98, 10]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50] */