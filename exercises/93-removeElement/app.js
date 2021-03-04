// Write your function here

function removeElement(array, num){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] != num) arr.push(array[i]);
    }
    return arr;
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]
