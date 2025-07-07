
import React from 'react';
import { X } from 'lucide-react';
import { Pokemon } from '../hooks/usePokemon';
import { typeColors, formatPokemonNumber, formatPokemonName, formatStatName } from '../utils/pokemonUtils';

interface PokemonDetailProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-red-600">
        <div className="sticky top-0 bg-red-600 text-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {formatPokemonNumber(pokemon.id)} {formatPokemonName(pokemon.name)}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="bg-gray-100 rounded-full p-4 inline-block mb-4">
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`${typeColors[type.type.name]} text-white px-3 py-1 rounded-full font-medium border-2 border-black`}
                >
                  {formatPokemonName(type.type.name)}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              <h3 className="text-lg font-bold text-black mb-3 bg-red-600 text-white p-2 rounded">Informações Físicas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Altura:</span>
                  <span className="font-bold text-black">{(pokemon.height / 10).toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Peso:</span>
                  <span className="font-bold text-black">{(pokemon.weight / 10).toFixed(1)} kg</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-black mb-3 mt-6 bg-red-600 text-white p-2 rounded">Habilidades</h3>
              <div className="space-y-1">
                {pokemon.abilities.map((ability, index) => (
                  <div key={index} className="bg-white px-3 py-2 rounded border border-gray-300">
                    {formatPokemonName(ability.ability.name)}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              <h3 className="text-lg font-bold text-black mb-3 bg-red-600 text-white p-2 rounded">Estatísticas Base</h3>
              <div className="space-y-3">
                {pokemon.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 text-sm font-medium">
                        {formatStatName(stat.stat.name)}
                      </span>
                      <span className="font-bold text-black">{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3 border border-black">
                      <div
                        className="bg-red-500 h-full rounded-full transition-all duration-300 border-r border-black"
                        style={{ width: `${Math.min((stat.base_stat / 200) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
