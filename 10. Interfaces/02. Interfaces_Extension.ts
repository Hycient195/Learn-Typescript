                /*======================*/
                /*======================*/
                /* Interfaces Extension */
                /*======================*/
                /*======================*/

/**
 * Interface extension is the process of composing an Interface
 * with the properties of another interface.
 * 
 * In TypeScript, it’s not always enough to be able to compose 
 * types together. Sometimes it’s convenient to copy all the 
 * type members from one type into another type. We can accomplish 
 * this with the extends keyword,
 * 
 * Let's see what this looks like in practice.
*/

interface Vehicle {
  GenericName: string,
  Model: string
  ModelNumber : number,
  NumberOfWheels: number
}

interface Car extends Vehicle {
  Name: string,
  Manufacturer: string
}

class Venza implements Car {
  public GenericName: string;
  public Model: string;
  public ModelNumber: number;
  public NumberOfWheels: number;
  public Name: string;
  public Manufacturer: string;

  constructor(genericName: string, model: string, modelNumber: number, numberOfWheels: number, name: string, manufacturer: string){
    this.GenericName = genericName;
    this.Model = model;
    this.ModelNumber = modelNumber;
    this.NumberOfWheels = numberOfWheels;
    this.Name = name;
    this.Manufacturer = manufacturer;
  }
}






                        /*=======*/
                        /* Hints */
                        /*=======*/
/**
 * 1. Using the "extends" keyword helps to keep our code(base) more
 *    organized making an abstraction of more common types in their 
 *    own interface, and then extending them into more specific types.
 * 
*/