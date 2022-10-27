import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Text,ScrollView } from 'react-native'
import {pokeDetail} from "../api/api"
import Header from "./HeaderPokemon"
import Type from "./TypePokemon"
export default function Pokemon(props) {
console.log("soy props",props)
const { 
  navigation,
  route:{params},
} = props

const [pokemon, setPokemon]= useState(null)

useEffect(()=>{
  (async ()=>{
    try {
      const response = await pokeDetail(params.id)
      console.log(response)
      setPokemon(response)
    } catch (error) {
      navigation.goBack();
    }
  })()},[params])
  
  if(!pokemon) return null;

  return (
    <ScrollView>
        <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
        />
        <Type types={pokemon.types}/>
    </ScrollView>
        
  )
}