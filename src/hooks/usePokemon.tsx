
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Pokemon {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonUrls = response.data.results;
        
        const pokemonDetails = await Promise.all(
          pokemonUrls.map(async (pokemon: { url: string }) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );
        
        setPokemons(pokemonDetails);
      } catch (err) {
        setError('Erro ao carregar os Pokémons');
        console.error('Erro na API:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
};
