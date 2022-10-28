import { SafeAreaView, View, Text, Button } from 'react-native'
import React ,{useState,useEffect}from 'react'
import {getPokemonsFavorite} from "../api/favorite"

export default function Favorite() {
const checkFavorites= async () =>{
  const response = await getPokemonsFavorite();
    console.log(response)
} 
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Favoritos" onPress={checkFavorites}/>
    </SafeAreaView>
      
  )
}