import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
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

export async function isPokemonFavorite(id){
    try {
        const response = await getPokemonsFavorite();
        return includes(response, id)
    } catch (error) {
        
    }
}

export async function removePokemonFavorite(id){
    try {
        const favorites = await getPokemonsFavorite();
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }
}