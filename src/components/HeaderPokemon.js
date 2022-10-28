import React from 'react'
import { View, Text, StyleSheet, Image,SafeAreaView } from 'react-native'
import { capitalize } from 'lodash'
import getColorByPokeType from '../utils/getColorByPokeType'

export default function HeaderPokemon(props) {
  const {name, order, image, type} = props;
  // console.log("soy header",props)
  const color = getColorByPokeType(type);
  const bgStyle=[{backgroundColor:color, ...styles.bg}]
    return (
    <>
        <View 
        style={bgStyle} 
         /> 
        <SafeAreaView style={styles.content}> 
         <View style={styles.header}> 
          <Text style={styles.name}>
            {name}
            </Text>
          <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
          </View>
          <View style={styles.contentImg}>
            <Image source={{uri:image}} style={styles.image}/>
          </View>  
        </SafeAreaView>
      
    </>
  )
}

const styles =StyleSheet.create({
    bg:{
        width:"100%",
        height:400,
        position:"absolute",
        borderBottomEndRadius:300,
        borderBottomLeftRadius:300,
        transform:[{scaleX:2}]
    },
    content:{
        marginHorizontal:20,
        marginTop:30,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingTop:40,
    },
    contentImg:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        top:30
    },
    name:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:27
    },
    order:{
      color:"#fff",
      fontWeight:"bold"
    },
    image:{
        width:250,
        height:300,
        resizeMode:"contain"
    }
})