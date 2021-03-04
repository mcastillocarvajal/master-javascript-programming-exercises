var car = {
  model: 'Toyota'
};

function getProperty(obj, key) {
  // your code here
  let output = obj[key];
  return output;
};

console.log(getProperty(car, 'model'));
