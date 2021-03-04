// Write your function here

function getIndexOf (char, string) {
    if (string.includes(char)) {
        for (let i=0; i<string.length; i++) {
            if (string[i] === char) return i;
        }
    } else return -1;

}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); 