
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
        <p className="text-white text-xl font-medium">Carregando Pokédex...</p>
        <p className="text-white/80 text-sm mt-2">Buscando os 151 Pokémons da primeira geração</p>
      </div>
    </div>
  );
};

export default Loading;
