import React, {useState, useEffect} from 'react'
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite} from '../api/favorite'

import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function PokeFavorite(props) {
 const {id}= props
const [isFavorite, setIsFavorite] = useState(undefined)
const [reloadCheck, setReloadCheck]= useState(false)
const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(()=>{
    (async ()=>{
     try {
        const response = await isPokemonFavorite(id)
        setIsFavorite(response)      
     } catch (error) {
        setIsFavorite(false)
     }   
    })();
    },[id,reloadCheck]);    

    const onReloadCheckFavorite = () =>{
        setReloadCheck((prev)=> !prev)
    }

    const addFavorite =async()=>{
      try {
        await addPokemonFavorite(id);
        onReloadCheckFavorite();

      } catch (error) {
        console.log(error)
      }
      }
    
    
  const  removeFavorite = async ()=>{
    try {
        await removePokemonFavorite(id);
        onReloadCheckFavorite()
    } catch (error) {
        console.log(error)
    }    
}
 
    return (
   <Icon name="heart" color="#fff" size={20} onPress={isFavorite ? removeFavorite : addFavorite} style={{marginRight:20  }}

   />  )
}