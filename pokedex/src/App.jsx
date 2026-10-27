import pokemonService from './service/pokemon'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PokemonInfo from './pages/PokemonInfo'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    pokemonService
      .getPokemons(50)
      .then((data) => setPokemons(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home pokemons={pokemons} />} />
      <Route path='/:id' element={<PokemonInfo />} />
    </Routes>
  )
}
export default App
