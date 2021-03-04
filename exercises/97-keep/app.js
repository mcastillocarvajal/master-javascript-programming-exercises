// Write your function here

function keep(array, num){
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] == num) arr.push(num);
    }
    return arr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]