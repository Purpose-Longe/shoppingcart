let user = {
    name_of_human: "John",
    age: 30
};

user.age = 25;
user.isAdmin = true;
delete user.age;

// console.log(user["name_of_human"]);
// console.log(user["isAdmin"]);
// console.log(user["age"]);

let fruit = "apple"; 
 let bag = {
    [fruit]: 5,
 };
 
//  console.log(bag.apple);

let baby = { 
    name: "Tomi",
    age: 24
};

// console.log("bag" in baby);

let snacks = {
    apple: 2,
    banana: 3,
    isAdmin: true
};

// for ( let key in snacks) {
//     console.log(key);
//     console.log(snacks[key]);
// }


Math.random()
Math.round()
console.log(Math.max(20, 40));

new Date()

Date.now()
