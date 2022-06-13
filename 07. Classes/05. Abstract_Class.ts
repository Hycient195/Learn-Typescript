                      /*================*/
                      /*================*/
                      /* Abstract Class */
                      /*================*/
                      /*================*/
/**
 * An abstract class is a base class used for inheritance, from which
 * other classes may be derived. Unlike regular classes, an abstract
 * class cannot be instantiated directly, except from its children 
 * classes.
 * 
 * It is good to know that any class that extends an abstract class,
 * makes a contract that it will implement all of its parent class
 * methods and properties.
 * 
 * Knowing that an abstract class cannot be instantiated and is just
 * meant mainly to be extended by another class, one may now ask, what
 * then is the difference between an abstract class and an interface?
 *  Well, the major difference is that unlike an interface, an abstract
 * class may contain implementation details for its member. This is not
 * possible in an interface.
 * 
 * Additionally, a class member may also be marked abstract. If a member
 * is marked abstract, it means that only its signature should be specified,
 * and its implementatin should be left only to its children or derived
 * classes. An abstract member does not have an implementation.
 * 
 * The major use of abstract classes is to define a structure to be
 * followed and implemented by other similar class derivations.
 *  A base implementaion can be made in an abstract class, and any 
 * derived class that doesn't intend follow this base implementation
 * can then "override" this base implementation.
 * 
 * Let's jump in and see abstract classes in action :)
*/

abstract class Animal{
  constructor(){
    this.GenericName = "";
  }
  public GenericName: string;
  public abstract NoOfLegs: number;
  public Move(): string { return "I move"};
  public abstract Feed(): string
}


class Dog extends Animal{
  constructor(genericName: string){
    super()
    this.GenericName = genericName;
  }
  public override NoOfLegs: number = 4;
  public override Move(): string{ return `I walk`}
  public override Feed(): string{ return `I eat meat`};
}


const Mielow = new Dog("Bulldog");
console.log(Mielow.Move())
console.log(Mielow)

/**
 * From the example above, the "Animal" class is marked abstract
 * because it just meant to be extended and not instantiated;
 * 
 * Its "GenericName" property is a property that should be set by 
 * the child class instance on its instantiation;
 * 
 * The "NoOfLegs" property on the other hand, is a property that is
 * meant to be posessed by all animals, hence it marked abstract so that
 * the respective animals inheriting the animal class can then implement 
 * or set the NoOfLegs the have themselves;
 * 
 * The "Move()" method on the other hand is not marked abstract because
 * is has a base implementation, which if not suitable for a child
 * class, can be overriden to suit properly as seen in the "Dog" class;
 * 
 * The "Feed()" method is an abstract method, and as such only its
 * signature is specified. Its implementation would then be carried out
 * in the derived classes of the "Animal" class;
 */