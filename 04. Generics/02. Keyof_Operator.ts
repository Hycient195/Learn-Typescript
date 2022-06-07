                  /*===================*/
                  /*===================*/
                  /* The KeyOf Oprator */
                  /*===================*/
                  /*===================*/

/**
 *  Putting it in simple terms, the "keyof" operator in typescript is used to extract 
 *  the keys of an explicitly defined type as a strings, and assign these strings as 
 *  a new type. Let's use an example to make this stick to mind.
 */

    /* Example */
// Let's take this type defined below.
type diskParams = {
  size: number,
  format: string,
  isErasable: boolean
}

// Now, using this type above, we can generate another union of types whoose values correspond
// to the string equivalent of the type above. Let's see this below.

type diskParamsKeys = keyof diskParams;

// Now the "diskParamsKeys" type above has the value of union of types 
// "size" | "format" | "isErasable" all in strings. It is the same to say that

// type diskParamsKeys = "size" | "number" | "isErasable";

// Let's take a practical example of the use of the keyof operator



  /* Example */
type customObj = {
  address: string,
  email: string
}

type customObjParams = keyof customObj;

function replacePropFromObj(obj: customObj, param: customObjParams, value: string ): customObj{
  const newObj = {...obj}
  newObj[param] = value;
  return newObj;
}

const entity = {
  address: "oldAddress",
  email: "sam@gmail.com"
}

const mutatedObj = replacePropFromObj(entity, "address", "newAddress")
console.log(mutatedObj);






// const obj:{
//   firstName: string,
//   lastName: string,
//   age: number,
//   isActive: boolean
// } = {
//   firstName: "Mile",
//   lastName: "Monroe",
//   age: 43,
//   isActive: false
// }


type obj2 = {
  firstName: string,
  lastName: string,
  age: number,
  isActive: boolean
}


type keyType = keyof obj2;

function doSomething(arg1: keyType){
  return arg1;
}

doSomething("lastName")






/*=================*/
/* Common Pitfalls */
/*=================*/

/**
 * 1. A explicitly defined type cannot be logged unto console.
*/