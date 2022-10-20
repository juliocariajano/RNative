import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokedex from '../components/Pokedex'
import Pokemon from '../components/Pokemon';

const Stack=createNativeStackNavigator();
export default function PokeNavigation() {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen
            name="Pokemon"
            component={Pokemon}
            options={{title:"Pokemon"}}
        /> */}
        <Stack.Screen
            name="Pokedex"
            component={Pokedex}
            options={{title:"Pokedex"}}
        />
       
    </Stack.Navigator>
  )
}