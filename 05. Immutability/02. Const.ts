            /*==================================*/
            /*==================================*/
            /* The "const" immutability keyword */
            /*==================================*/
            /*==================================*/

/**
 * The "const" immutabilty keyword is basically a keyword used to
 * ensure that all the values or properties of reference data types
 * are all individually immutable once they have been defined.
*/

/**
 * Let's backtrack a bit..
 * 
 * In the advent of ES6, the "const" keyword was introduced in other
 * to make variables unreassignable (kinda immutable) once 
 * they have been defined, hence cannot be reassigned once defined.
 * 
 *  Despite this property of the "const" keyword, is can still be seen 
 * that reference data types like objects and arrays can still have their
 * properties reassigned even after creating them using the const keyword,
 * this is bacause only their name definition is unassignable, and not their
 * content or properties.
 * 
 * example
 * 
 * let apparels = [ "bag", "cloth", "shoes"];
 * apparels[1] = "hat";
 *  
 *  Typescript comes with its own feature that enable one to make the 
 * constituents of reference data types (arrays, objects ...etc) themselves,
 * be immutable. This is called the "const typecasting" (a name I gave it though).
 * This process is done by typecasting the data type to a "const" type.
 * 
 * Let's see how to implement immitability on reference data types as shown in 
 * the examples below
*/


const arr1 = [4, 98, 5, 54] as const; // OR
const arr2 = <const>['H', 'E', 'L', 'L', 'O']; // OR
const arr3: readonly boolean[] = [true, false, false, true];

const he = <const>{
  name: "some",
  age:584
}

const she = {
  name: "Her",
  age: 854
} as const;


// These can also be done on regular data types;
let num = 34 as const;
let letter: string = <const>'H';
let state: boolean = <const>false;
