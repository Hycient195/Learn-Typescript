                /*=======================*/
                /*=======================*/
                /* Constructor Shorthand */
                /*=======================*/
                /*=======================*/
/**
 * The constructor shorthand syntax is a time saving syntax used to
 * initialize class properties, and also assign the constructor input
 * to them on the fly. 
 * 
 * Let's see what this looks like, and compare it to the originl
 * was of carrying out this process. 
*/

/* The regular approach */
class Utilsil{
  private Name: string;
  protected Diameter: number;
  public IsHeatResistant: boolean;

  constructor(name: string, diameter: number, isHeatResistant: boolean){
    this.Name = name;
    this.Diameter = diameter;
    this.IsHeatResistant = isHeatResistant;
  }
}



/* Using constructor shorthand */
class UtensilMod{
  constructor(
    private Name: string,
    protected Diameter: number,
    public IsHeatResistant: boolean
  ){}
}


// When compiled, both classes look exactly the same
