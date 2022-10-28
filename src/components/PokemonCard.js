import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { capitalize } from 'lodash'
import getColorByPokeType from '../utils/getColorByPokeType'
import { StyleSheet,View, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default function PokemonCard(props) {
    const{pokemon} = props
    const navigation = useNavigation();
    const pokeColor = getColorByPokeType(pokemon.type)
    const bgStyle ={backgroundColor:pokeColor, ...styles.bgStyles}
    // console.log("soy navigation",navigation)
    const goToPokemon =()=>{
        // console.log("Click a detail")
        navigation.navigate("Pokemon",{id: pokemon.id});
}
    return (
    <TouchableWithoutFeedback onPress={()=>goToPokemon()}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyle}>
                    <Text style={styles.number}> 
                    #{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={styles.name}> {capitalize(pokemon.name)}</Text>
                    <Image source={{uri:pokemon.image}} style={styles.imagen}/>
                </View>
             
            </View>
            
        </View>

    </TouchableWithoutFeedback>
  )
}

    const styles =StyleSheet.create({
        card:{
            flex:1,
            height:130,
        },
        spacing:{
            flex:1,
            padding:3
        },
        bgcolor:{
            backgroundColor:"grey" 
        },
        bgStyles:{
            flex:1,
            borderRadius:15,
            padding:5,
        },
        number:{
            position:"absolute",
            color:"#fff",
            fontWeight:'bold',
            fontSize:11,
            right:10,
            top:10,
            // textlign:"center"
        },
        name:{
            color:"#fff",
            fontWeight:'bold',
            fontSize:15,
            paddingTop:10,
            textAlign:"center"
        }, 
        imagen:{
            position:"absolute",
            bottom:2,
            right: 2,
            width:90,
            height:90 
        }
    })