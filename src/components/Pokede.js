import React, {useEffect, useState} from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getPokeApi, getPokeApiDetail } from '../api/api'
import PokemonList from './PokemonList'
export default function Pokede() {
const [pokemons, setPokemons]=useState([])
const [nextUrl, setNextUrl] = useState(null)
// console.log("pokemons", pokemons) 

useEffect(()=>{
    (async ()=>{
      await loadPoke();
    })();
  },[])

  const loadPoke = async()=>{
    try {
      const response = await getPokeApi(nextUrl);
      setNextUrl(response.next)

      const pokeArray = [];
      for await (const pokemon of response.results){
        const pokemonDetail= await getPokeApiDetail(pokemon.url);
        pokeArray.push({
          id: pokemonDetail.id,
          name:pokemonDetail.name,
          type: /* Accessing the first element of the array of types. */
          pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image:pokemonDetail.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemons([...pokemons, ...pokeArray]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList 
      pokemons={pokemons} 
      loadPoke={loadPoke}
      isNext={nextUrl}/>
    </SafeAreaView>
  )
}