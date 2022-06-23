                    /*================*/
                    /*================*/
                    /* Type Narrowing */
                    /*================*/
                    /*================*/
/**
 * Type narrowing is the process of specifying different logic for
 * each of the different types in a union of types.
 * 
 * Type narrowing allows us to perform type specific logic on unions
 * without causing typescript to throw any error.
 * 
 * Type narrowing is carried out using a mechanism called "Type Guard".
 * A type guard is simply an expression that checks the specific type
 * of a variable and executes actions on it depending of its type.
 * 
 * Let's see type narrowing in action.
*/

function formatArgument(arg: number | string): string{
  if(typeof arg == 'string'){
    return arg.toLowerCase()
  }
  return String(arg);
}

console.log(formatArgument("A Very Big Boy"));
console.log(formatArgument(3152));

/**
 * The function above, takes in a union of types but have different
 * implentation if the input argument is a sting, and a differen 
 * implementation if the type of the input argument is a number.
 * This is one basic application of Type narrowing.
*/

/**
 * We can also use the "in" operator to further narrow our type, by
 * checking if a property exists on an entity. These can be used on
 * primitive types and even custom created objects.
*/

type TPlayer = {
  name: string,
  age: number
}

type TSport = {
  name: string,
  isAvaliable: boolean
}

const Validatt = (arg: TPlayer | TSport): void =>{
  if('isAvaliable' in arg){
    console.log('argument contains avaliability')
  }
  else if('age' in arg){
    console.log("Argument contains age");
  }
}