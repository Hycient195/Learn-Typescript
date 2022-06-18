                      /*========*/
                      /*========*/
                      /* Mixins */
                      /*========*/
                      /*========*/

/**
 * In simple terms, a Mixin is a function that returns a class.
 * 
 * Let's backtrack a bit..
 * 
 * Over the couple of lessons ago, we have heard of higher order
 * functions, as functions that take a function as input argument
 * or return a function. In this stead, a Mixin is similar but 
 * somewhat different. It returns a class in instead.
 * 
 * One may then ask, a function that returns a class, so what??
 * what then is the reason behind this?? What is set to be 
 * acheived with this??
 * 
 * A Mixin is a function that is used to attach methods and
 * properties from an already existing class to a new class together
 * with the properties and methods of the new class..
 * 
 * Wait a minuite, this sounds exactly as inheritance, what's the
 * difference, what's the catch here??
 * 
 * A mixin then comes into the picture to solve the problem of 
 * double inheritance in a class
 * 
 * As opposed to regular inheritance using the "extends" keyword,
 * a mixin can be used additionally for multiple inheritance, which
 * is not possible using the regular inheritance with the "extends"
 * keyword.
 * 
 * Let's see an example of what a basic Mixin looks like
*/

  /* Example */
function Mix(){
  return class {
    property: string = "A property"
  }
}
const Mixed = Mix()
const derived = new Mixed()
derived.property = "New Value"




/**
 * Let's take a case study below an entity "Knife" that falls into
 * two categories "Utensil" and "Weapon" and we would want "Knife"
 * to inherit from these two classes. Guess what happens when we 
 * do that which we have in mind.
*/

class Utensil{
  public Slice(entity: string): string{
    return `${entity} has been sliced`
  }

  public Chop(entity: string): string{
    return `${entity} has sliced`
  }
}

class Weapon {
  public Stab(entity: string): string{
    return `${entity} has been stabbed`
  }

  public Slash(entity: string): string{
    return `${entity} has been slashed`
  }
}


// class Knife extends Utilsil, Weapon{
//   // properties
// }

/**
 * If We uncomment the code above, it would be seen that double
 * inheritance cannot be accomplished using the supposed syntax
 * we thought of, an error is thrown Now this is where a Mixin 
 * comes in.
*/


/** Let's see how we can accomplish this using a mixin */


// Declaring a class signature as a custom explicit type
type Class  = new (...args: any[]) => any

// Declaring "Utinsil" As a Mixin
function UtensilMixin<Base extends Class>(BaseClass: Base){
  return class extends BaseClass {
    public Slice(entity: string): string{
      return `${entity} has been sliced \n`
    }
  
    public Chop(entity: string): string{
      return `${entity} has chopped \n`
    }
  }
}

// Declaring "Weapon" as a mixin
function WeaponMixin<Base extends Class>(BaseClass: Base){
  return class extends BaseClass {
    public Stab(entity: string): string{
      return `${entity} has been stabbed \n`
    }
  
    public Slash(entity: string): string{
      return `${entity} has been slashed \n`
    }
  }
}

/**
 * From the Mixins above each of the Mixins take a class, and
 * return a new class, meaning that for each mixin that gets passed
 * a class, it returns a new class extending the properties and
 * methods of the class passed to it with the properties inside
 * the class contained in the mixin.
 * 
 * Since Mixins take a class and return a class, we can then use
 * this characteristic to chain together a host of mixins together
 * to cause multiple inheritances, and extend yet another new class
 * with the cummulation of the classes returned from the mixin
 * chain as shown below.
 */

class Knife extends UtensilMixin(WeaponMixin(class {})){
  constructor(){
    super() // To invoke parent constructors
  }

  public Clean(): void{   // Child class method
    console.log("Knife cleaned")
  }
}


/**
 * The new instances created from "Knife" now has all the properties
 * of "Utensil" and "Weapon"
 */
const Katana = new Knife();
console.log(
  Katana.Chop("Cabbage"), 
  Katana.Slash("Watermelon"),
  Katana.Slice("Sugarcane"),
  Katana.Stab("Punchbag"),
)

Katana.Clean();






/*=======*/
/* Hints */
/*=======*/
/**
 * 1. Mixins can be used on already created built in types to 
 *    latch on more properties and methods, to increase their
 *    functionality.
 */