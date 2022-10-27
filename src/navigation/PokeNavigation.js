import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokede from '../components/Pokede'
import Pokemon from '../components/Pokemon';

const Stack=createNativeStackNavigator();
export default function PokeNavigation() {
  return (
    <Stack.Navigator>
       
        <Stack.Screen
            name="Pokede"
            component={Pokede}
            options={{title:"", headerTransparent:true }}
        />
        <Stack.Screen
            name="Pokemon"
            component={Pokemon}
            options={{title:"", headerTransparent:true}}
        />
    </Stack.Navigator>
  )
}