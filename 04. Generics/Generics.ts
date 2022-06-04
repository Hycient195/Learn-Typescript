                    /*==========*/
                    /*==========*/
                    /* Generics */
                    /*==========*/
                    /*==========*/
/**
 * A generic is a tool that enables components to be reusable with different data types,
 * rather than being tightly coupled with a specific data type.
 *   These component could range from Functions, classes, explicit types, interfaces, ..etc;
 * A generic is implemented by specifying the type to be accepted by the component, in angle
 * brackets while defining it. 
 */

  /*+++++++++*/
  /* Example */
function Arrange<T>(arg1: T, arg2: T): T[]{
  return [arg1, arg2];
}
/**
 * From the example above the type "T" specified in angle brackets can be replaced with
 * any primitive, or even custom types when the function is being invoked as seen below.
 *    The letter "T" used here is just a popular convention, and any other letter of word 
 * which is not a keywork can also be used instead, but let's stick to conventions.
 */
Arrange<string>("Rob", "Landes");
Arrange<number>(23, 64);





/*=====================================*/
/* A Practical Application Of Generics */
/*=====================================*/
/**
 * Now we've seen the logic and basic syntax behind generics, let's move to a more practical
 * use of it in solving a generic problem :)
 */
/**
 * You remember our useState function in the tuples section that accepts only string input,  
 * now we're going to use generics to make our function to be more reusable in 
 * accepting different types of as opposed to just a string only.
 * By not explicitly specifying types on function definition, and allowing types to only be
 * specified in the invocation of the function, the function can then be made more reusable 
 * with different primitive and even custom types.
 */

  /*+++++++++*/
  /* Example */
function MyUseState<T>(def?: T):[ ()=> T, (arg: T) => void ]{
  let val: T;
  return [ ()=> val, (arg: T)=>{ val = arg} ]
}

const [ getValue, setValue ] = MyUseState<number>(43);

setValue(3196);
console.log(getValue());

setValue(0x0E3);
console.log(getValue());





/*========================================================*/
/* A Deeper Dive Into Generics By using them with Classes */
/*========================================================*/
/**
 * In This example below, a Generic List (like those in other programming langauges)
 * is created here with the use of generics. The List is made to only accept values
 * only of the type specified in the instantiation of the List class.
 *    With the aid of generics, the class can be used with the different primitive, and
 * even custom types, or interfaces.
 * The example below is not an actual implementation of a list, the aim of the example is just
 * to learn how generics work in their use with classes.
 */
class List<T>{
  private _internalList: T[] = [];
 
  public get Length (): number {
    return this._internalList.length;
  }
  
  public Add(arg: T): void{
    this._internalList = [...this._internalList, arg]
  }

  public Remove(arg: T): T[]{
    let temp: T[] = [];
    for(let i = 0; i < this._internalList.length; i++){
      if(this._internalList[i] === arg){
        continue;
      }
        temp = [...temp, this._internalList[i]];
    }
    this._internalList = temp;
    return temp;
  }
}

let itemList = new List<string>();
itemList.Add("Added this")
itemList.Add("And another");

console.log(itemList);

console.log(itemList.Remove("And another"));
console.log(itemList);




/*============*/
/* Take Aways */
/*============*/
/**
 * 1. Generics are used in other to make components (functions, classes, interfaces, ...etc;)
 *    reusable with different primitive and custom types.
 * 
 * 2. It saves the stress of defining different overloads of a method for different types.
 * 
 * 3. It clears the need for doing explicit type casting.
 * 
 * 4. Generics help in compile time type error checkiing, so that errors are not carried 
 *    over into runtime.
 * 
 * 5. Union types can also be used with generics.
 */