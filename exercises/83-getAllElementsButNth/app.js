// Write your function here

function getAllElementsButNth(array , index){
    let newArray = [];
    for (let i=0; i<array.length; i++) {
        if (i === index) continue;
        newArray.push(array[i]);
    }
    return newArray;
}    

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']