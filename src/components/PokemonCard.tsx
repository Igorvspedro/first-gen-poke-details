
import React from 'react';
import { Pokemon } from '../hooks/usePokemon';
import { typeColors, formatPokemonNumber, formatPokemonName } from '../utils/pokemonUtils';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 p-4"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-gray-500 text-sm font-medium mb-2">
          {formatPokemonNumber(pokemon.id)}
        </div>
        
        <div className="mb-4">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="w-24 h-24 mx-auto object-contain"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {formatPokemonName(pokemon.name)}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-1">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className={`${typeColors[type.type.name]} text-white text-xs px-2 py-1 rounded-full font-medium`}
            >
              {formatPokemonName(type.type.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
