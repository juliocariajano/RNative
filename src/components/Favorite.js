import { SafeAreaView, View, Text, Button } from 'react-native'
import {useFocusEffect} from "@react-navigation/native"
import React ,{useState,useEffect, useCallback}from 'react'
import useAuth from "./hooks/useAuth"
import {getPokemonsFavorite} from "../api/favorite"
import { pokeDetail } from '../api/api'
import PokemonList from "./PokemonList"
import NoLogged from './NoLogged'

export default function Favorite() {
  const [pokemons, setPokemons]= useState([])
  const {auth}= useAuth();

  useFocusEffect(
    useCallback(()=>{
      if(auth){
        (async()=>{
          const response = await getPokemonsFavorite();
          //se reutiliza el codigo del componente pokede
          const pokeArray = [];
         
          for await (const id of response){
            const pokemonDetail= await pokeDetail(id);
            pokeArray.push({
              id: pokemonDetail.id,
              name:pokemonDetail.name,
              type: /* Accessing the first element of the array of types. */
              pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image:pokemonDetail.sprites.other['official-artwork'].front_default,
            })
          }
            setPokemons(pokeArray);
        })()
      }
        
      },[auth])
    
  )

   
  return !auth ? (
      <NoLogged/>
      ) : (
      <PokemonList 
      pokemons ={pokemons}
      />
      )
      }