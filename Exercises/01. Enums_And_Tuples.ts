let pet = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}
let petTS: Pet = Pet.Chinchilla;


// Using an tuple with an enum below
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
]

// ordersArrayTS.push([Pet.Jerboa, 3]); // Returns an error