
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
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-4 border-2 border-gray-200 hover:border-red-400"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
          {formatPokemonNumber(pokemon.id)}
        </div>
        
        <div className="mb-4 bg-gray-50 rounded-full p-2">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="w-24 h-24 mx-auto object-contain"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-lg font-bold text-black mb-3">
          {formatPokemonName(pokemon.name)}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-1">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className={`${typeColors[type.type.name]} text-white text-xs px-2 py-1 rounded-full font-medium border border-black`}
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
