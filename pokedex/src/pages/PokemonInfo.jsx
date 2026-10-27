import { useParams } from 'react-router-dom'

const PokemonInfo = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Pokemon Info</h1>
    </div>
  )
}

export default PokemonInfo