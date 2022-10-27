import { POKEMON_TYPE_COLORS } from "./constants";
const getColorByPokeType = (type)=> POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokeType