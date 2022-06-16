              /*==================*/
              /*==================*/
              /* Access Modifiers */
              /*==================*/
              /*==================*/
/**
 * An access modifier is a special keyword mechanism used to prevent
 * or allow certain levels of access to a member of a class.
 *  Access modifiers are tightly coupled to classes and object 
 * oriented programming.
 * 
 *  There are 3 supported Access Modifiers in Typescript, 
 * which in levels of strictness are as follows
 * 1. Private
 * 2. Protected
 * 3. Public
 * 
 * Private: The "private" access modifier restrict access to a class
 *     member, only to other class members. and prevents access to it
 *     from child (inheriting) classes and members outside the class
 * 
 * Protected: The "Protected" access modifier restricts access to
 *     members outside the class, but unlike the private access modifier,
 *     additionally allows access to the class member, to the children
 *     or inheriting classes of the parent class.
 * 
 * Public: The "Public" access modifier restricts no access at all, 
 *     and allows access from any entity, to a class member from within
 *     or outside its class (the class of the member).
 *      By default without attaching any access modifier, all class
 *     are public
*/

// Let's see how these access modifiers work using the examples below
// <::::::::::::::[]==0   0==[]::::::::::::::>

  /* Example */
class Human{
  constructor(firstName: string, lastName: string, age: number, email: string){
    this._descriptions = [];
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Age = age;
    this.Email = email;
  }

  private _descriptions: string[];

  private FirstName: string;
  private LastName: string;
  protected Age: number;
  protected Email: string

  public Describe(description: string): string[]{
    this._descriptions = [...this._descriptions, description]
    return this._descriptions;
  }

  public GetDescription(): string[]{
    return this._descriptions;
  }
}

const HomoSapien = new Human("Irik", "Jarvis", 192, "irik@human.com");

// HomoSapien.FirstName = "Jamil"; /* Not allowed because "FirstName" is private */
// HomoSapien.LastName = "Jani"; /* Not allowed because "LastName" is private */
// HomoSapien.Age = "Jamil"; /* Not also allowed because "Age" is protected */
HomoSapien.Describe("First man to walk the earth"); // Allowed because "Describe" is public
console.log(HomoSapien.GetDescription());


///////////////////////////////////////////////////////////////////////////

// Let's see the protected access modifier in action
class Student extends Human{
  constructor(firstName: string, lastName: string, age: number, email: string, levelOfStudy: string, isOverstay: boolean){
    super(firstName, lastName, age, email)
    this.Email = "student" + this.Email;  /* This is only possible in the inherited class because "email" is declared "protected" and not "private" */
    this.LevelOfStudy = levelOfStudy;
    this.IsOverstay = isOverstay;
  }

  public LevelOfStudy: string;
  public IsOverstay: boolean;
}

/**
 * Is is possible to access and even mutate the "email" property
 * in the "Student" class only because the "email" property has a
 * "protected" access modifier, and the "Student" class inherits 
 * from its own class "Human";
 */