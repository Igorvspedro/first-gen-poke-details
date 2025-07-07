
import React, { useState } from 'react';
import { usePokemon, Pokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import Loading from '../components/Loading';

const Index = () => {
  const { pokemons, loading, error } = usePokemon();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-600">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Erro ao carregar Pokédex</h2>
          <p className="text-red-100">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-black"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Pokédex Kanto
            </h1>
            <p className="text-red-100 text-lg">
              Os 151 Pokémons da Primeira Geração
            </p>
          </div>
        </div>
      </div>

      {/* Pokemon Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </div>
      </div>

      {/* Pokemon Detail Modal */}
      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      {/* Footer */}
      <div className="bg-black border-t-4 border-red-600">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white">
            Dados fornecidos por{' '}
            <a 
              href="https://pokeapi.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 font-medium hover:text-red-300 transition-colors"
            >
              PokéAPI
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
