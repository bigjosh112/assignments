const cars =["porsche", "buggati", "Rolls Royce"];
//console.log(cars);
cars[0] = "Toyota";

// console.log(cars);
// console.log(typeof cars);

const fruits =["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString());
// console.log(fruits.join(" + "));
// console.log(fruits.pop());

// console.log(fruits)

console.log(fruits.push("Kiwi"));
console.log(fruits);
fruits.shift();
console.log(fruits);
 fruits.unshift("Lemon");
 console.log(fruits);

 fruits[fruits.length] = "Oranges"
 console.log(fruits);

 delete fruits[0];
 console.log(fruits[0]);



 const myGirls = ["dayo"];
 const myBoys = ["dapo", "david"];
 const myChildren = myGirls.concat(myBoys);
 console.log(myChildren);



 const person ={
    firstName: "John",
    lastName: "mote",
    age: 100,
    eyeColor: "black",

 };

 console.log(person.eyeColor);