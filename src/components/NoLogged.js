import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

export default function NoLoged() {
  const navigation = useNavigation();

    return (
        
        <View style={styles.content}>
        <Text style={styles.text}>Para ver esta pantalla es necesario inicia sesion con los siguientes datos:</Text>
        <Text style={styles.text}>username: admin  clave:12345</Text>

    <Button title="Ir al Login" onPress={()=>navigation.navigate("Account")}></Button>
    </View>
    
  )
 }

const styles= StyleSheet.create({
content:{
    marginVertical:50,
    paddingHorizontal:50
},
text:{
    textAlign:"center",
    marginBottom:10
}
})