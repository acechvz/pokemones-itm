import React, { useState, useEffect } from "react";
import "./App.scss";
import { API_URL } from './constants';
import PokemonCard from './components/PokemonCard';

// Pokedex
function App() {

  const [ pokemon, setPokemon ] = useState({});

  const getPokemon = async (id) => {
      const response = await fetch(`${API_URL}${id}`);
      const resp = await response.json();

      setPokemon(resp);
  }

  useEffect(() => {
    // componentDidMount 
    getPokemon(35);
  }, [])

  return (
    <div className="pokedex">
      <div className="pokedex-content">
        {/* Search Box */}
        

        {/* Pokemon Card */}
        {
          Object.keys(pokemon).length &&
          <PokemonCard pokemon={ pokemon } />
        }
      </div>
    </div>
  )
}

export default App;
