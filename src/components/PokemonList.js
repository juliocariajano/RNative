import {StyleSheet, FlatList,Text, ActivityIndicator, Platform  } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
  const{pokemons, loadPoke, isNext} = props
  const loadMore =()=>{
  // console.log ("list", pokemons)
    loadPoke();  }
    return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon)=>String(pokemon.id)}
        renderItem={({item})=><PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
          />
          )
          
        }
    />
  )
  // <Text>Lista pokemon</Text>
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5,
        marginTop: Platform.OS=== "android" ? 40: 0,
      },
    spinner:{
     marginTop:20,
     marginBottom: Platform.OS=== "android" ? 40: 60 
    
    }
})