function removeProperty(obj, key) {
  // your code here
  return delete obj[key];
};

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name);

console.log(obj);
