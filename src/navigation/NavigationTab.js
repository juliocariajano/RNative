import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {Image} from "react-native"
import FavoriteNavigation from './FavoriteNavigation';
import PokeNavigation from './PokeNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen 
        name="Account" 
        component={AccountNavigation}
        options={{
            tabBarLabel:"Account",
            tabBarIcon:({color, size})=><Icon name="user" color={color} size={size}/>
        }}
        />
        <Tab.Screen 
        name="MovieCard" 
        component={PokeNavigation}
        options={{
            tabBarLabel:"",
            tabBarIcon:()=> renderPoke(), 
        }}
        />
        <Tab.Screen 
        name="Favorite" 
        component={FavoriteNavigation} 
        options={{
            tabBarLabel:"Favorite",
            tabBarIcon:({color, size})=><Icon name="heart" color={color} size={size}/>
        }}
        />
        
    </Tab.Navigator>
  )
}

function renderPoke(){
    return (
        <Image 
      source={require("../assets/poke.png")}
      style={{ width:40, height:40, top:5}}
      />
       
    )
}