import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { View, Text,ScrollView } from 'react-native'
import {pokeDetail} from "../api/api"
import Header from "./HeaderPokemon"
import Type from "./TypePokemon"
import Stats from './Stats'
import useAuth from './hooks/useAuth';
import PokeFavorite from './PokeFavorite';

export default function Pokemon(props) {
console.log("soy props",props)
const { 
  navigation,
  route:{params},
} = props

const [pokemon, setPokemon]= useState(null)
const {auth}= useAuth();

useEffect(()=>{
navigation.setOptions({
  headerRight:()=>auth && <PokeFavorite id={pokemon?.id}/>,
  headerLeft:()=>(
  <Icon 
  name="arrow-left" 
  color="#fff"
  size={20}
  style={{marginLeft:20}}
  onPress={navigation.goBack}
  />)
})},[navigation, params, pokemon])

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
        <Stats
        stats={pokemon.stats}
        />
    </ScrollView>
        
  )
}