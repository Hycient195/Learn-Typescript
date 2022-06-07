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

/**
 * One Could ask what is the need of this when we can always define a new type with values
 * corresponding to the string values of the properties of another type, well, the main use 
 * of this is for flexibility and reusability sake.
 *  A good practice while working on large codebases is to avoid redundant procedures in carrying
 * out process. Automating actions and processes is a good way to go about this.
 *  The "keyof" operator helps out in this, so that for every time the properties of the 
 * reference object is updated or modified, the typs(s) making use of its properties are also
 * modified in the same suit.
 * The keyof Operator helps to keep a funciton signature in sync with a type or interface.
 */

// Let's take a practical example of a usecase of the keyof operator.

/*==========================================*/
/* Using The keyof Operator with a function */
/*==========================================*/
  /* Example */
type customObj = {
  address: string,
  email: string
}

function replacePropFromObj(obj: customObj, param: keyof customObj, value: string ): customObj{
  const newObj = {...obj}
  newObj[param] = value;
  return newObj;
}
// The function above though can be made more dynamic by making it generic;

const entity = {
  address: "oldAddress",
  email: "sam@gmail.com"
}

const mutatedObj = replacePropFromObj(entity, "address", "newAddress")
console.log(mutatedObj);

/**
 * This example above takes an object, a property from that object to be modified, and the 
 * new value to modify the old value of the property.
 * 
 *  The To ensure that the property specified to be modified is always a property contained
 * in the object specified, the keyof Operator is used to extract the keys/properties of the 
 * object and assign them to another type. This type now becomes the explcit union of types of the
 * second argument to the function (param), such that if a property is specified to be modified,
 * and is not property of the object specified, and error would be thrown. You gerrit??
*/





/*========================================*/
/* Using the Keyof Operator With Generics */
/*========================================*/
/**
 * When a propery of a function is dependent the properties of another "type", "object", or
 * "interface", then these properties can be made type safe by using a generic function, and 
 * extracting the properties from the type, object or interface by using the "extends" 
 * keyword as shown in the example below.
 * 
*/

function extractProp<Obj, Prop extends keyof Obj>(user: Obj, prop: Prop): Obj[Prop]{
  let newObj = { ...user }
  return newObj[prop]
}

const newUser = {
  name: "Shanks",
  age: 50,
  active: true
}

console.log(extractProp(newUser, "name"));

/**
 * "<Obj, Prop extends keyof Obj>"" means that the type values for anything assigned to "Prop", 
 * must only be a union type of string representation of the properties of Obj. If a string 
 * that is not a part of that union type is passed to the function above, or assigned to the
 * value of anything assigned to prop, then an error is thrown.
 * 
 *  Is is also noteworthy that the type being extended can also be derived from an explicit
 * type or an interface.
*/





                        /*=====*/
                        /*Hints*/
                        /*=====*/
/**
 * 1. click on an entity In VSCode ( object, class or even ) use CTRL + Spacebar on it
 *    and the list of properties and methods on that entity would be exposed.
*/


                    /*=================*/
                    /* Common Pitfalls */
                    /*=================*/
/**
 * 1. An explicitly defined type cannot be logged unto console, likewise a union of types
 *    obtained using the keyof operator. 
 * 2. The generic type must not be specified, when invoking a function extracting parameters
 *    using the keyof operator in a generic initialization.
*/








