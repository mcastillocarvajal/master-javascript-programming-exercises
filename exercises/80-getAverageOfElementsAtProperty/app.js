// Write your function here

function getAverageOfElementsAtProperty(obj, key) {
    sum = 0;
    av = 0;
    if (typeof (obj.key) == 'object' && obj.key !== null && obj.key !== '') {
        for (let i = 0; i < obj.key.length; i++) {
            sum += obj.key[i];
            average = sum / obj.key.length;
        }

        return average;
    }
    else return 0;
}


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);