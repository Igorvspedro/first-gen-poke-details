
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Erro ao carregar Pokédex</h2>
          <p className="text-red-100">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Pokédex Kanto
            </h1>
            <p className="text-white/90 text-lg">
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
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white/80">
            Dados fornecidos por{' '}
            <a 
              href="https://pokeapi.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:underline"
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
