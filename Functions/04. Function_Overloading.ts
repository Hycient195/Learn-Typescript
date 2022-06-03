/*======================*/
/* Function Overloading */
/*======================*/
/**
 * Function overloading is the process of defining one function with severay function signatures.
 * Function Overloading allows one to use a specific function with severay variations, of number of
 * inputs, and diffrernt types of these inputs.
 *  Take for example, the "console.log" function can output arrays, objects, string, numbers etc because
 * it has overloaded versions of it that accept different types as input arguments.
 * 
 * Function overloading requires quite some application of logic and a bit of type casting. An example
 * is as shown below.
 */

/**
 * For the purpose of this example we shall be defining a simple "add" function, with diffrernt function signatures,
 * that returns the sum of the values passed to it, in whatever format they come. Let's jump right into it
 */

// Firstly, We define the Allowed overload function Signatures.
function AddOverload(a:number, b:number): number;
function AddOverload(a:string, b:string): number;


// The we define the fucntion itself
function AddOverload(arg1: unknown, arg2?: unknown):number{
  let returned:number = 0;

  if(typeof arg1 == "number"){
    returned = <number>arg1 + (arg2 as number);  //I used Both type castings here to demonstrate that then can both applicable.
  }
  else if(typeof arg1 == "string" && typeof arg2 == "string"){
    returned = <number>parseInt(arg1) + <number>parseInt(arg2);
  }

  return returned;
}

console.log(AddOverload(34, 23));
console.log(AddOverload("34", "23")); 