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