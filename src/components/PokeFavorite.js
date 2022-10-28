import React from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavorite } from '../api/favorite'

export default function PokeFavorite(props) {
 const {id}= props

  const addFavorite =async()=>{
    addPokemonFavorite(id)
  }

  // const  getPokeFav= async()=>{
  //   const response=  await getPokemonsFavorite();
  // }
  return (
   <Icon name="heart" color="#fff" size={20} onPress={addFavorite} style={{marginRight:20  }}

   />  )
}