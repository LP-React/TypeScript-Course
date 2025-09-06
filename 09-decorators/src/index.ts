import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).custonName = 'Pikachu'
// console.log(charmander);

// charmander.savePokemonToDB(2)

charmander.publicApi = 'hello'
console.log(charmander);


