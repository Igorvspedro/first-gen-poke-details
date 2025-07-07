
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-600">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
        </div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-black mx-auto mb-4"></div>
        <p className="text-white text-xl font-bold">Carregando Pokédex...</p>
        <p className="text-red-100 text-sm mt-2">Buscando os 151 Pokémons da primeira geração</p>
      </div>
    </div>
  );
};

export default Loading;
