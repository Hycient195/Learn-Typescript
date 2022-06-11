            /*==============*/
            /* Immutability */
            /*==============*/

/**
 * Immutability is simply the process of making a parameter non
 * modifiable, once it has been initialized with a value;
 *  Immutability is mostly acheivable using the "readonly" keyword,
 * the "const" keywork, and the "Readonly<>" utility type.
*/

  /* Examples */
interface IAccount{
  number: number,
  name: string,
  readonly balance: number,
  readonly dormant: boolean
}

const SavingsAccount: IAccount = {
  number: 4938594033,
  name: "Mrs. Bolaji Olatunde Suleiman",
  balance: 5049426,
  dormant: false
}

// SavingsAccount.balance = 27385;
// SavingsAccount.dormant = true;

/**
 * In The example above, setting the balance and "dormant" properties
 * to "readonly" ensures that once their values are defined, they 
 * cannot be modified later in the code as shown in the error in
 * the attempt to modify them above. This is the power of 
 * immitability in action.
*/

/////////////////////////////////////////////////////////////////////

/**
 * In a case where all the properties of an interface or type are
 * all to be made readonly, this is where the "Readonly<>" utility
 * types comes in. This utility type makes all properties of an
 * explicit type or interface passed to it, readonly.
*/


  /* Example */
type TTamper = {
  age: number,
  status: string,
  email: string
}

type TDontTamper = Readonly<TTamper>;

// "TdontTamper" above is not equivalent to the below, but more flexible
type _TDontTamper = {
  readonly age: number,
  readonly status: string,
  readonly email: string
}
// Let's take a practical look at an application of the readonly
// Utility type.








/*=====================================================*/
/* Practical Application of the Partial<> Utility Type */
/*=====================================================*/

interface ICard{
  cardNumber: number,
  pin: number
}
const CreateAndDontChange = (cardNumber: number, pin: number): Readonly<ICard> =>{
  return{
    cardNumber,
    pin
  }
}

const DebitCard = CreateAndDontChange(748937792874921, 0X44F)

// DebitCard.pin = 8888; // Unable to overwrite the value of the "pin" property as the
                      // return type of the "CreateAndDontChange" function is constructed
                      // from the Readonly<> utility type, which makes all the properties
                      // of "ICard" readonly.


