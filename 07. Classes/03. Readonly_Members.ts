                /*========================*/
                /*========================*/
                /* Readonly Keyword */
                /*========================*/
                /*========================*/
/**
 * The "readonly" keyword as its name spells, is a keyword used to 
 * make a property read-only.
 * 
 *  Properties that are marked as readonly can be accessed outside of
 * their class, but however the values can only be read, but cannot
 * be modified.
 *  
 *  A property is marked readonly by prefixing it with the "readonly"
 * keyword.
*/
class ImmutableItem{
  constructor(
    public readonly Name: string,
    public readonly BatchNumber: number,
    public readonly Price: number,
    public readonly sayHello = (arg: string): string=>{
      return `returned something`;
    }
  ){}
}

const item1 = new ImmutableItem("Cheese", 31426, 3000);

// item1.Name = "something";  // Not Allowed
// item1.BatchNumber = 345;   // Not Allowed



/**
 * The "readonly" keyword can also be used on interfaces and explicit
 * types, and all classes or objects implementing it would not 
 * be able to modify their properties after being created
*/
interface IItem{
  readonly name: string,
  readonly batchNumber: number
  readonly price: number,
}

const item2: IItem = {
  name: "good",
  batchNumber: 437834,
  price: 434
}

type TItem = {
  readonly name: string,
  readonly batchNumber: number,
  readonly price: number
}

const item3: TItem = {
  name: "New name",
  batchNumber: 346343,
  price: 34534
}

// item2.name = "New Name";  // Not Allowed
// item2.batchNumber = 3644; // Not Allowed