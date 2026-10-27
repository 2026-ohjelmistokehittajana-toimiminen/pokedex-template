import axios from 'axios'

const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
    return mapResults(response.data)
  }
  catch {
    throw 'Issues loading pokemons'
  }
}

export default { getPokemons }