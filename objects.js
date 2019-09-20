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


/**************************/

// P4

const ogre = {
    name:"Sejla",
    hitpoints: 100,
    attack: function () {
       return Math.floor(Math.random()*10)
    }
};

const adventurer = {
    name:"Candy",
    hitpoints: 100,
    attack: function () {
        return 10
    }
};

let winner = null;

for (let i =true;true;i=!i){
    if(i){ // when i is true it's Ogre turns
        const damage = ogre.attack();
        console.log(`${ogre.name} attacks on ${adventurer.name} with ${damage} Damage.`);
        adventurer.hitpoints-=damage;
    }
    else{
        const damage = adventurer.attack();
        console.log(`${adventurer.name} attacks on ${ogre.name} with ${damage} Damage.`);
        ogre.hitpoints-=damage;
    }
    if(ogre.hitpoints <0){
        winner = adventurer;
        break;
    }
    if(adventurer.hitpoints <0){
        winner = ogre;
        break;
    }
}
console.log(`${winner.name} Wins!!`);

