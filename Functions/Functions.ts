/*=====================================================================*/
/* Functions, Optional Parameters and Default parameters in Typescript */
/*=====================================================================*/
type util = Record<string, number[]>

/** Optional Parameter */
const addString  = (str1: string, str2?: util ):string =>{
  return `${str1} ${str2}`;
}
console.log(addString("hello", {"hello": [23, 34]})) // Using 1 argument is allowed because of specifed optional argument



/** Default Parameter */
const addNumber = (num1: number, num2: number = 0):number =>{
  return num1 + num2;
}



/** Function Signature */
let addSomething: (param1: string, param2: string) => void;



/** Function with rest input parameters */
const restful = (compulsory: string, ...others:string[]):string =>{
  return `${compulsory} ${others.join(" ")}`;
}
console.log(restful("Welcome", "to", "Miami", "Carl"));




/*================================================================*/
/** The Nullish Coalescing ("??") Operator in Typescript Function */
/*================================================================*/
/**
 * The " Nullish Coalescing ("??") " operator is useful in a function when Typescript code is to be used or referenced in a javascript file.
 * Since JavaScript does not throw an error if insufficient values are passed to a function, this operator
 * provides another way to specify default parameters if arguments are not passed to the function when
 * called from a JavaScript file.
 *  
 * The Nullish Coalescing operator specifies that if the value of the expression specified before it 
 * evaluates to null, then the value after it should be used instead
 */

 /* Import and Call this method in a JavaScript file without input arguments to see how nullish
 * coalescing gives the return string variables, default values.
 */
export const optFunc = (input:{string1: string, string2: string}): string =>{
  return `${input?.string1 ?? "default 1"}  ${input?.string2  ?? "default 2" }`
}
console.log(optFunc({string1: "First input", string2: "Second input"}));




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

console.log(AddOverload("34", "23"));
console.log(AddOverload("34", "23")); 





/*======================================*/
/* Higher Order Functions in TypeScript */
/*======================================*/
/**
 * A Higer order function is simply a function that operate on another function either by taking it as
 * an input argument or by returning a function.
 * 
 * A higher order function can be defined in typescript as shown below
 */



/*-------------------------------------------------------------------------------------*/
/* Let's take a look at a function that accepts a callback function as input argument. */
/*=====================================================================================*/
const MultiplyAndNotify = (a: number, b: number, callback: () => string): void =>{
  console.log(a * b);
  console.log(callback()); // The callback function fires after the multiplication action has been completed.
}

MultiplyAndNotify(10, 20, ()=>{ 
  return `Multiplication completed`;
})

/** The signature of the callback function is specified as it's type in the type definition of the 
 * function's input arguments.
 */


/*-----------------------------------------------------------*/
/* Now let's take a look at functions that return a function */
/*===========================================================*/
const AddWithCallback = (a: number): (cbArg: number) => number =>{
  return (cbInput: number) =>  a + cbInput;
}
const callback = AddWithCallback(10)
console.log(callback(20));


/* Further More a custom type can be defined for both cases to be used or reused as the fucntion
signature. Let's make use of a regular function here, to keep things simple */
  /** Example */

type FunctSignature = (cbArg: number) => number;
function MultiplyWithCallback(a: number): FunctSignature{
  return (cbArg: number)=> a * cbArg;
}

