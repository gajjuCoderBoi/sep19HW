// P1
let me = {};
let obj = new Object();
let obj2 = Object.create(obj);

/**************************/

// P2

let me = {
    name: "Kristyn",
    age: 42,
    email: "kristyn@foo.bar"
};

console.log(me.name);

me['age'] = 43;

console.log(me['age']);

me["place of residence"] = "NYC";

console.log(me["place of residence"]);

/**************************/

// P3

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
};

console.log(monster.name);

/*
    Changing key.
 */

monster['creature'] = monster.type;
delete monster.type;

console.log(monster);

