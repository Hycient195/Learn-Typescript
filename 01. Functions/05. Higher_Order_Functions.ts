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
  signature. Let's make use of a regular function here, to keep things simple 
*/
  
  /** Example */
type FunctSignature = (cbArg: number) => number;

function MultiplyWithCallback(a: number): FunctSignature{
  return (cbArg: number)=> a * cbArg;
}

const callback2 = MultiplyWithCallback(5);
console.log(callback2(10));





                          /*=======================*/
                          /*       Take Away       */
                          /*========================*/
/**
 * 1. It is necessary to specify the function signature when either recieving a function as
 *    callback input, or returning a function from a higer order function.
 * 
 * 2. Make use of types more for defining function signatures.
 * 
 * 3. Try the use of regular functions, if the syntax of arrow functions seems ambigious in
 *    the implementation of a Higher order function.
 */