/*=====================*/
/* Optional Parameters */
/*=====================*/

/**
 * Optional Parameters are used when a function is required to perform its duties with
 * or without the presence of some input parameters.
 * 
 * An input parameter to a function is specified optional by using optional chaining,
 * as shown below.
 */

  /* Examples */
/*-----------------------------------------*/
/* Using Optional Parameters in a Function */
/*=========================================*/
const greet = (firstName: string, lastName: string, middleName?:string):string =>{
  return `${firstName} ${lastName} ${middleName? middleName: ""}`
}

console.log(greet("Mike", "Lowry"));
console.log(greet("John", "Grady", "Newman"))



/*---------------------------------------*/
/* Using Optional Parameters in a Object */
/*=======================================*/
interface School {
  name: string,
  contact: {
    phone?: number,
    email?: string
  }
}

function CreateSchool (school: School): string{
  return `${school.name} can be reached via ${school?.contact?.phone ?? ""} or ${school?.contact?.email ?? ""} `
}
console.log(CreateSchool({name: "Golden Child", contact: {email: "gc@gmail.com"}}));

/**
 * The use of optional parameters in the example above enables a user to optionally pass in the phone or email
 * properties of the contact property object. The nullish coalescing on the other hand enables an empty string to be returned if a
 * value is not passed in for any of both.
 */




/*--------------------*/
/* Optional Callbacks */
/*====================*/
function AdditionWithCallback(a: number, b: number, callback?: ()=> void):void{
  console.log(a + b);
  callback?.();
} 
AdditionWithCallback(25, 35); //Third argument (callback) is not specified, and no error is thrown.

/**
 * In using optional parameters with callbacks, optional chaining is used on the on the callback input argument,
 * and the callback invocation inside the parent function.
 */



/* Note */
/**
 * 1. All Compulsory parameters in a function must be specified before the optional ones.
 */