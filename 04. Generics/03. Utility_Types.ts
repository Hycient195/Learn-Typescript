          /*===============*/
          /* Utility Types */
          /*===============*/

/**
 * Let's take a look at quite some of the frequently Utility Types
 */



          /*============================*/
          /* The Partial<> Utility Type */
          /*============================*/
/**
 * The partial Utility type is used to create another type from
 * an already existing type, or interface, and making all the 
 * properties of this new type optional corresponding to the 
 * properties of the old type.
 */

// Let's take a brief Example

interface Order{
  id: number,
  title: string,
  details?: string,
  isConfirmed?: boolean
}

type orderOptional = Partial<Order>;

/**
 * In this example below, the "orderOptional" type has all
 * the properties of the "Order" type, but these properties
 * are marked optional, because they were created using the
 * Partial<> Utility type. In physical representation, is looks 
 * something like the comment shown below.
*/

type _orderOptional = {
  id?: number,
  title?: string,
  details?: string,
  isConfirmed?: boolean
}

/**
 * Instead of updating the type above for every time the original
 * deriving interface or type is updated, the Partial Utility 
 * type helps us make our code more flexible by updating the derived
 * type whoose properties are optional, corresponding to the original
 * type or interface.
*/


/*+++++++++++++++++++++++++++++++++++++++++++++++++/
/* Practical Application of the Partial<> Utility */
/*================================================*/
type Item = {
  index: number,
  type: string,
}

function replace(obj1: Item, obj2: Partial<Item>): Item{
  return{
    ...obj1,
    ...obj2
  }
}
// const replaces = replace({
//   index: 12,
//   type: "Edible"
// }, 
// {
//   type: "combustible"
// })


/**
 * The Practical Applicaiton of the Partial Utility type is shown
 * in the second object argument passed to the "replace" function.
 *  The second object allows only one propery to be passed to it,
 * because the partial Utility type cloned all the properties from
 * the "Item" type and made optional, as a type specification for
 * the second object "obj2".
*/







            /*=============================*/
            /* The Required<> Utility Type */
            /*=============================*/
/**
 * The Required<> Utility type is the opposite of the Partial<>
 * utility type, is takes all the optional properties on an
 * interface or explicitly defined type, and makes them compulsory
*/

// Let's take a look at a practical example;

  /* Example */
type Optionals = {
  statement?: string,
  isAgreed?: boolean
}

type Compulsory = Required<Optionals>;

/**
 * The new type "Compulsory" above is same as shown below, only 
 * that using the Required<> Utility type helps us keep track of
 * the original type or interface.
*/
type _Compulsoru = {
  statement: string,
  isAgreed: boolean
}







          /*===========================*/
          /* The "Pick<>" Utility Type */
          /*===========================*/
/**
 * The "Pick<>" Utility type is used to single out, or Pick
 * (as the name implies) one property, out of an already existing
 * type, and assign it to a new type.
 *  The "Pick" Utility type taked in 2 generic arguments; first, the
 * type or interface whom a property is to be extracted from, secondly,
 * a string argument corresponding to the property to be extracted
 * from the original type.
 */

// Let's take an example;

  /* Example */
interface Several{
  dont_care: string,
  very_important: string
}

type Single  = Pick<Several, "very_important">;

// Single is same as
type _Single = {
  very_important: string
}








          /*===========================*/
          /* The "Omit<>" Utility Type */
          /*===========================*/
/**
 * The "Omit<>" utility type is the exact opposite of the Pick
 * utility type, is is used to assign a new type properties, form
 * an already existing type, whilst excluding, or "Omitting" one or 
 * more properties or the already existing type.
*/

type SeveralProperties = {
  prop_one: number,
  prop_two: number,
  prop_three: number,
  prop_four: number,
  prop_five: number
}

type OmitOne = Omit<SeveralProperties, "prop_one">

/**
 * "OmitOne" is not a type having all the properties of 
 * "SeveralProperties", excluding "prop_one"
*/










              /*=============================*/
              /* The "Record<>" Utility Type */
              /*=============================*/
/**
 * The "Record<>" utility type Used to construct a new object.
 * it accepts
 */




/*=======*/
/* Hints */
/*=======*/
/**
 * 1. These utility type can be used on both interfaces,
 *    and explicitly defined types.
 * 
 * 2. Hover above the name of the type created from the utility
 *    type, its actual property and type content.
 * 
 * 3. The "Omit<>" utility type cannot be used to omit more than
 *    one property.
 */