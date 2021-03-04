// Write your function here

function countAllCharacters(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] == undefined) obj[str[i]] = 1;
        else obj[str[i]]++
    }
    return obj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}