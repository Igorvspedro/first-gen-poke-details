
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {formatPokemonNumber(pokemon.id)} {formatPokemonName(pokemon.name)}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="w-48 h-48 mx-auto object-contain mb-4"
            />
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`${typeColors[type.type.name]} text-white px-3 py-1 rounded-full font-medium`}
                >
                  {formatPokemonName(type.type.name)}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Informações Físicas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Altura:</span>
                  <span className="font-medium">{(pokemon.height / 10).toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="font-medium">{(pokemon.weight / 10).toFixed(1)} kg</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-6">Habilidades</h3>
              <div className="space-y-1">
                {pokemon.abilities.map((ability, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-2 rounded">
                    {formatPokemonName(ability.ability.name)}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Estatísticas Base</h3>
              <div className="space-y-3">
                {pokemon.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">
                        {formatStatName(stat.stat.name)}
                      </span>
                      <span className="font-medium">{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
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
