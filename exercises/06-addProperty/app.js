function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
};


var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);