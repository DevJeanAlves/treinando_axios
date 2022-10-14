const axios = require("axios");

const getPokemon = async () => {
  const pokemon1 = axios.get( "https://pokeapi.co/api/v2/pokemon/2")
  const pokemon2 = axios.get( "https://pokeapi.co/api/v2/pokemon/100")
  const pokemon3 = axios.get( "https://pokeapi.co/api/v2/pokemon/11")

  const pokemons = await Promise.all([pokemon1, pokemon2, pokemon3])

  const showPokeMoves = (pokemons, n1) => {
    const pokeMoves = (item) => {
      console.log(`MOVE: ${item.move.name}`)
    }

    pokemons[n1].data.moves.forEach(pokeMoves)
    console.log("====================")
  }

  const showPokeType = (pokemons, n1) => {
    const showTypes = (item) => {
      console.log(`TYPE ${item.type.name}`);
    }

    const pokeTypes = pokemons[n1].data.types
      pokeTypes.forEach(showTypes)
      console.log("====================")

  }

  const showPokeName = (pokemons, n1) => {
    console.log("====================")
    console.log(`POKEMON NAME: ${pokemons[n1].data.name}`)
    console.log("====================")
  }



const listCaughtPokedex = (pokemons) => {
let n1 = 0

while (n1 < pokemons.length) {

    showPokeName(pokemons, n1)

    showPokeType(pokemons, n1)

    showPokeMoves(pokemons, n1)

    n1++

    console.log("\n \n")
  }
}

listCaughtPokedex(pokemons)

}

getPokemon()