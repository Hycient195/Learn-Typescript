                                /*==============*/
                                /*==============*/
                                /*    Tuples    */
                                /*==============*/
                                /*==============*/

/* Basic Definition */
/**
 * A tuple in simple statement is a fixed array with types defined for specific index positions
 * in the array
 */

/**
 * A tuple is first defined with a type signature like every other type, and is then
 * assigned values with corresponding types for each of the index positions. These two
 * steps can either be some separetely or together as shown in the examples below.
 */

  /* Examples */
let userTuple: [ string, number, boolean ] = ["Favour", 21, true];  // Case 1;

let tuple: [ string, number, string, boolean, object, ()=>void]  // Case 2;
tuple = ["hark", 23, "the", false, { prop: "hello" }, ()=> console.log("I'm a function returning nothing")];





/*================================*/
/* A Basic Application Of a Tuple */
/*================================*/
/* Let's try creating something that looks like react's useState hook */
// Don't bother if you don't use React

/**
 * In the function below, the return signature is specified using a tuple as
 * shown below;
 */

  /* Example */
function useState():[() => string, (x:string) => void]{
  let holder: string;
  return [ () => holder, (input: string)=>{ holder = input } ]
}

const [ getEntity, setEntity ] = useState();

setEntity("Welcome home lad");
console.log(getEntity()); // Prints the string value directly above it.

setEntity("Something else");
console.log(getEntity());  // Prints the string value directly above it.





/*========================================================*/
/* Using Tuples with Custom Types, Classes and interfaces */
/*========================================================*/
interface IUser{
  name: string,
  age: number;
  getProps:()=>string;
}

type StringOrNum = string | number;

class StoreItem{
  constructor(itemId: number, description: string){
    this.ItemId = itemId;
    this.Description = description
  }
  public ItemId: number;
  public Description: string;
}

class Transaction{
  constructor(transactionId: number, status: boolean){
    this.TransactionId = transactionId;
    this.Status = status;
  }
  public TransactionId: number;
  public Status: boolean;
}

const storyBook = new StoreItem(3546, "A book of bedtime stories");
const transaction__000165 = new Transaction(0x0165F, true);
const user__204: IUser = {
  name: "Marquees Brownlee",
  age: 31,
  getProps(){
    return `${this.name} is ${this.age} years old`
  }
}

/* Now, Creating the Tuple of Custom Types */
let purchase: [ IUser, StoreItem, Transaction, Date, StringOrNum ];

/* Adding the items of custom types to the Tuple */
purchase = [user__204, storyBook, transaction__000165, new Date(), "Accepting Union Type"];









/*=======================================================*/
/* Using a Tuple To specify Input Argument to a Function */
/*=======================================================*/
function TakeParameters(...params:[number, boolean, string]): void{
  console.log("This function takes 3 argument and return nothing")
}

TakeParameters(34, false, "hello");


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
type TypedParams = [string, boolean, number];

function TakeTypedTupleParameters(...params: TypedParams): void{
  console.log(`${params[0]} | ${params[1]} | ${params[2]}`)
}

const correctParams: TypedParams = ["Hycient", true, 195];
// const wrongParams: TypedParams = [45, "Lofi", false];   //Does not follow the tuple type
TakeTypedTupleParameters(...correctParams);


/** Note */
/**
 * Note That for both cases the values obtianed form the tuple can be accessed using
 * Array Indexing.
 * 
 * The spread Oprerator is used to pack the values received by the function, and unpacks
 * them inside the function.
 */






              /*=================*/
              /* Common Pitfalls */
              /*=================*/
/**
 * 1. A tuple cannot be defined with a const declaration;
 * 
 * 2. A semicolon ":" is used to specify the types to be used by the
 *    tuple, and not an assignment operator, because it is not the actual definition
 *    of the tuple.
 * 
 * 3. It should be ensured that an explicit type definition is used when passing arguments
 *    to a function receiving a tuple, and if the values are to be passed from a variable 
 *    holding the input tuple, then the tuple variable should also inplement the explicit
 *    type.
 *    
 */

