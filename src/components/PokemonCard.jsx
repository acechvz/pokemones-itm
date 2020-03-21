import React from 'react';
import { POKE_IMAGE_URL } from '../constants';

function PokemonCard({ pokemon }) {

  const getPokemonType = () => pokemon.types[0].type.name;
  const TYPE_NAME = getPokemonType();
  const POKE_ID = String(pokemon.id).padStart(3, '0');

  const IMAGE_URL = pokemon.id <= 640 ?
    `${POKE_IMAGE_URL}pokemon_icon_${ POKE_ID }_00.png` :
    pokemon.sprites.front_default;

  return (
    <div className="card">
        <div className={ `card-info ${ TYPE_NAME }` }>
            <h2>{ pokemon.name }</h2>
            <span className="card-info-id">#{ POKE_ID }</span>
            <img src={IMAGE_URL} alt="Imagen del Pokemon"/>
            <div className="pokeball-bg"></div>
        </div>

        <div className="card-details">
            <div className="details-item">
                <div>Height</div>
                <span>{ pokemon.height / 10 }m</span>
            </div>

            <div className="details-item">
                <div>Type</div>
                <span className={ `icon ${ TYPE_NAME }` }>
                <img src={`icons/${ TYPE_NAME }.svg`} width="40" alt="Icono del Tipo" />
                </span>
            </div>

            <div className="details-item">
                <div>Weight</div>
                <span>{pokemon.weight / 100}kg</span>
            </div>
        </div>
    </div>
  )
}

export default PokemonCard;