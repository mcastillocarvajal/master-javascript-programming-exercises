// Write your function here

function areValidCredentials(user, pass){
    if(user.length > 3 && pass.length >= 8) return true;
    else return false;
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);