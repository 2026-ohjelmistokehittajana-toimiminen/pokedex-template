import { Link } from 'react-router-dom'

const Home = ({ pokemons }) => {
  return (
    <>
      <p>Pokedex</p>
      {
        pokemons.map(({ id, name }) => (
          <Link to={`/${id}`} key={id}>
            <p>{name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
          </Link>
        ))
      }
    </>
  )
}

export default Home