import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { SafeAreaViewBase } from "react-native";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavorite(){
    try {
        const response= await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
       
    } catch (error) {
        throw error        
    }
}

export async function addPokemonFavorite(id){
try {
    const favorites = await getPokemonsFavorite();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
} catch (error) {
    throw error;
}
} 