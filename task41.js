var obj1 = {name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};

var obj3 = Object.assign(obj1,obj2);
console.log(obj3)

console.log(JSON.stringify(obj1) == JSON.stringify(obj3));