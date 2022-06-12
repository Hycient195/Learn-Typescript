                    /*==============*/
                    /*==============*/
                    /* Enumerations */
                    /*==============*/
                    /*==============*/
/**
 * Enumerations or Enums for short can simply be defined as a 
 * group of named constraints avaliable to an entity.
 * 
 *  Let's take for instance, a function is meant only to be passed 
 * one out of three distinct strict values, enums enable us to enforce
 * the rule on the function so that any input passed to the function 
 * which is not one out of the three would return an error. This is 
 * a form of type safety.
 * 
 * Let's take an example below
 */



enum Options{
  Good = "Good",
  Better = "Better",
  Best = "Best"
}

function GetRemark(remark: Options): string{
  return `Your remark is registered as ${remark}`
}

const result = GetRemark(Options.Best);


/**
 * Also, optionally, one can also choose not to assign any value to
 * the enumeration of options as shown below
*/

enum Proficiency{
  Novice,         // 0
  Beginner,       // 1
  Amatuer,        // 2
  Intermediate,   // 3
  Advanced,       // 4
  Master,         // 5
  Grandmaster     // 6
}

/**
 *  The drawback of this approach however is that the enumerations
 * are now by default assigned to increamental index numbers, 
 * because no values were assigned to them, and this
 * could somtimes be a pain if a debugging process is carried out
 * sometime later in the code(base) on the enumeration
 * 
 * This is shown below.
*/

console.log(
  (function PrintProficiency(proficiency: Proficiency){
    return proficiency
  })(Proficiency.Advanced)
)

// IIFE is used on the function above. Google it up if you find it 
// a bit difficult to grasp at first sight.







                        /*=======*/
                        /* Hints */
                        /*=======*/
/**
 * 1. It is always good practice to assign string values that have 
 *    reasonable meanings to the context, to the entities in an
 *    enumeration. 
*/