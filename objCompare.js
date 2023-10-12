var obj1 = {name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};


function equality(obj1,obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    let keys = Object.keys(obj1)
    for (let key of keys){
        if (obj1[key] == obj2[key]) return true;
    }
}

console.log(equality(obj1,obj2));