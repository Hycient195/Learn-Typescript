"use strict";
let isLoggedIn = false;
let firstName = "Jerry";
// isLoggedIn += "Malik"; /** This gies an error ac a boolean cannot be coereced to a string */
/** Another syntax for defining an array */
const numArr = [1, 3, 4, 6];
/** Defining the type structure for an object */
const person = {
    userName: "Michael",
    lastName: "Jordan",
    age: 23
};
/** On Object */
const user = {
    name: "Alasa",
    age: 34,
    isLoggedIn: false
};
/** On Class */
class Person {
    constructor(name, age, isLoggedIn) {
        this.name = name;
        this.age = age;
        this.isLoggedIn = isLoggedIn;
    }
}
const user1 = new Person("marach", 23, true);
console.log(user1);
/*===================================*/
/* An intro to Records in Typescript */
/*===================================*/
const arrr = {
    1: "Puppy",
    2: "Lazy"
};
