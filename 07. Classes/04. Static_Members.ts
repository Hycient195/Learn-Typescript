                /*================*/
                /*================*/
                /* Static Members */
                /*================*/
                /*================*/
/**
 * A Static class member is a class member that is shared by all 
 * instances of a class. 
 * 
 * A static class member is not duplicated for all instance
 * members unlike the regular default non-static members, and 
 * cannot be accessed from a class instance, but rather is accessed
 * throught the class itself.
 * 
 * Both properties and methods can be made static.
 * 
 * However unlike in some other programming langauges (eg C#), classes
 * themselves cannot be made static. To create a non-instantiable
 * class, one would rather have to use an abstract class
*/

class StaticClass{
  constructor(title: string, description: string){
    this.Title = title;
    this.Description = description;
    
  }

  public static StaticList: string[] = [];
  public Title: string;
  public Description: string;
}

const static1 = new StaticClass("Title 1", "Description 1");

static1.Title = "New Title";          // Allowed because "Title" is not static
StaticClass.StaticList.push("first"); // Accessed directly from the class because "StaticList" is a static member
// static1.StaticList.push("second")  // Not Allowed because static members cannot be accessed by instances of a class;





                /*=======*/
                /* Hints */
                /*=======*/
/**
 * 1. A major application of static properties is in the creation 
 *    of utility classes. eg. the inbuild Math class.
 */