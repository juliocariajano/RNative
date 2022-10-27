import { API_HOST } from "../utils/constants";

const getPokeApi = async (endpointUrl)=>{
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
       return result;
    } catch (error) {
        console.log(error)
    }
}

const getPokeApiDetail=async(url)=>{
try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
} catch (error) {
    console.log(error)    
}
}

const pokeDetail = async (id)=>{
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports={getPokeApi, getPokeApiDetail, pokeDetail}