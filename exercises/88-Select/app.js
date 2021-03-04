// Write your function here

function select (arr, obj) {
    let newObj = {};
    arr.forEach(
        element => {
            if (obj.hasOwnProperty(element) == true) {
                newObj[element] = obj[element];
            }
        }
    )
    return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }