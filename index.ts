let isLoggedIn = false;
let firstName = "Jerry";

// isLoggedIn += "Malik"; /** This gies an error ac a boolean cannot be coereced to a string */


/** Another syntax for defining an array */
const numArr: Array<number> = [1,3,4,6];


/** Defining the type structure for an object */
const person: {
  userName: string,
  lastName: string,
  age: number
} = {
  userName : "Michael",
  lastName: "Jordan",
  age: 23
}


/*=========================================================================*/
/** Enforcing Strict Structure on a class and an object using an Interface */
/*=========================================================================*/
interface IPerson {
  name: string,
  age: number,
  isLoggedIn: boolean
}

/** On Object */
const user: IPerson = {
  name: "Alasa",
  age: 34,
  isLoggedIn: false
}

/** On Class */
class Person implements IPerson{
  constructor(
    public name: string,
    public age: number,
    public isLoggedIn: boolean,
  ){}
}

const user1 = new Person("marach", 23, true);
console.log(user1);



/*===================================*/
/* An intro to Records in Typescript */
/*===================================*/
const arrr: Record<number, string> = {
  1: "Puppy",
  2: "Lazy"
};



