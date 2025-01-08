//////1
let inf = { name: "Adam", age: 25, gender: "male" };
console.log(inf.name);
console.log(inf.age);
console.log(inf.gender);

//////2
let info = { name: "Adam", age: 25 };
info.gender = "male";
console.log(info);

//////3
let info2 = { name: "Adam", age: 25 };
info["gender"] = "male";
console.log(info2);

//////4
let info1 = { name: "Adam", age: 25 };
console.log(info1.name);

//////5
let info3 = { name: "Adam", age: 25 };
console.log(info3["name"]);

////6
let inf1 = { name: "Adam", age: 25, gender: "male" };
for (let key in inf1) console.log(`${key}:${inf1[key]}`);

//////7
let inf2 = { name: "Adam", age: 25, gender: "male" };
let inf3 = Object.keys(inf2);
console.log(inf3);

//////8
let inf4 = { name: "Adam", age: 25, gender: "male" };
let inf5 = Object.values(inf4);
console.log(inf5);

//////9

let inf6 = { name: "Adam", age: 25, gender: "male" };
let inf7 = Object.entries(inf6);
console.log(inf7);

//////10

let info4 = { name: "Adam", age: 25 };
let info5 = { gender: "male" };
let inf8 = Object.assign(info5, info4);
console.log(inf8);

//////11

let person = {
  name: "Adam",
  age: 25,
};
let p = Object.freeze(person);
console.log(p);

//////12
let person1 = {
  name: "Adam",
  age: 25,
};
let key = Object.seal(person1);
console.log(key);
