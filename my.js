const obj1 = {
  a: 5,
  b: 3,
  c: 4,
};
const obj2 = {
  a: 25,
  b: 23,
  c: 24,
};

const obj3 = {
  a: 2,
  b: 13,
  c: 14,
};

const allObj = {
  a: obj1,
  b: obj2,
  c: obj3,
};

const allObj2 = {
  a: obj1,
  b: obj2,
  c: obj3,
};


const newObj = {

}

const newObj2 = {};

obj3[newObj] = 666;
obj3[newObj2] = 56;


const copylinkAllObj = allObj;
const copyAllObj = { ...allObj };


console.log("allObj === allObj2:>> ", allObj === allObj2);
console.log("allObj === copylinkAllObj:>> ", allObj === copylinkAllObj);
console.log("allObj === copyAllObj:>> ", allObj === copyAllObj);


console.log("allObj.a === copyAllObj.a :>> ", allObj.a === copyAllObj.a);
console.log('obj3 :>> ', obj3);