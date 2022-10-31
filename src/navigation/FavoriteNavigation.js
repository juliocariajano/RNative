import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorite from '../components/Favorite'
import Pokem from "../components/Pokemon"

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Favorites"
            component={Favorite}
            options={{title:"Favoritos"}}
       />
       {/* Navegacion hacia atras */}
       <Stack.Screen
            name="Pokemon"
            component={Pokem}
            options={{title:"",
            headerTransparent:true
          }}

        />
    </Stack.Navigator>    
  )
}