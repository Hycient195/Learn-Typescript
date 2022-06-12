                  /*===============*/
                  /*===============*/
                  /* Literal Types */
                  /*===============*/
                  /*===============*/

/**
 *  A Literal Type is a mechanism employed by Typescript to constrain the
 * variants of arguments passed to a function by to just a number
 * of explicitly specified values..
 * 
 *  This mechanism is very similar in functionality to Enums as it
 * helps to constrain the variant of values that can be supplied to
 * a functional Entity..
 * 
 *   A literal can be of any of the primitive types, or even custom types
 * explicit types, or classes.
 * 
*/

// Theories and gramaticals aside, let's see what it looks like :)

    /* Example 1 */
const ValidateGrade = (grade: 'A'|'B'|'C'|'D'|'E'|'F'): void =>{
  console.log("The code compiled sucessfully, because your grade is valid")
}
ValidateGrade('B')  // Allowed;
// ValidateGrade('X')  // Not allowed;


  /* Example 2 */
function RollDice(diceNumber: 1|2|3|4|5|6): void{
  console.log(`You obtained number ${diceNumber}`) 
}
RollDice(4) // Allowed;
// RollDice(9)  // Not allowed;




/*===================================================*/
/* Using Literal Types On Custom Non-Primitive Types */
/*===================================================*/
type TTypeOne = {
  a: string
}

type TTypeTwo = {
  b: number
}

function AccepTypes(type: TTypeOne | TTypeTwo): void{
  console.log(`Even non primitive types can be used`);
}

AccepTypes({ a: "hello" })      // Allowed
AccepTypes({ b: 34 })           // Allowed
// AccepTypes({ b: "Hello" })   // Not Allowed