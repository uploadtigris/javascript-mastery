//using strict mode
'use strict';
//must be the first line of CODE
//forbids certain actions
//makes many errors visible

/*
let hasDriverLicense = true;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive');

//Arrow Operators
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2022 - birthYeah;
    const retirment = 65 - age;
    //return retirment;
    return `${firstName} retires in ${retirment} years.`;
}
console.log(yearsUntilRetirement(1999, 'Tigris'));
console.log(yearsUntilRetirement(1974, 'Sam'));


//Function delcaraitons ***
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
console.log(age1);

//Funciton Expression (expressions produce values)
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


//Funcions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//Reviewing Functions

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1; // immedeatly exists the function
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 1999, 2001);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

//Basic Array Operations (Methods)
//Add Elements
const superheroes = ['Michael', 'Steven', 'Peter'];
const newLength = superheroes.push('Clark Kent');// to the end
console.log(superheroes);
console.log(`The length of this Array is ${newLength}`);

superheroes.unshift('john');//to the beggining
console.log(superheroes);

//Remove Elements
const popped = superheroes.pop(); //Last
console.log(`${popped} was removed`);
console.log(superheroes);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven')); //Test with strict equality. No type coercion.

//Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmet',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
}

//Dot vs Bracket Notation
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]); // does not work this way with dot notation

const interestedIn = prompt('What would you like to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job, and friends ')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends`);


//Object Methods
const tigris = {
    firstName: 'Jonas',
    lastName: 'Schmet',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: true,

    //any function attached to an object is called a method.

    /* (could be written as this)
    calcAge: function (birthYeah) {
        return 2037 - birthYeah;
    }
    
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYeah;
    }
    
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

};

//console.log(tigris.calcAge());
//console.log(tigris['calcAge'](1991));
console.log(tigris.calcAge());
console.log(tigris.age);
*/


const tigris = {
    firstName: 'Tigris',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        //Solution 1
        // //used to preserve the 'this' keyword in the scope chain.
        // const self = this; // self or that
        // console.log(self);
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };


        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
        //a regular function call
        //the 'this' keyword is set to undefined.
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }

};
//NEVER use an arrow funcion as a method.
//bc it comes out undefines as the "this" keyword will refer to the 'window' at global scope.
tigris.greet();
tigris.calcAge();

//arguments keyword
const addExpr = function (a, b) {
    console.log(arguments)
    //'arguments' can only exist in regular functions.
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);


// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// addArrow(2, 5, 8);

//Primative and Objects

//Primitive Types
let lastName = 'Williams';
let oldName = lastName;
lastName = 'Davis';
console.log(oldName, lastName);

//Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 30,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

//Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 30,
}

//Shallow copy, only copies properties in the first level.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);

