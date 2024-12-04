// pages/index.tsx
"use client"

import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from "@clerk/nextjs"

const PokemonFetcher = () => {
  const {isLoaded, userId} = useAuth();

    
  // State for storing the Pokemon name and sprite URL
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonSprite, setPokemonSprite] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch Pokemon data
  const fetchData = async (): Promise<void> => {
    setError(null); // Reset the error state before making the request
    try {
      // Fetch data from the API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

      if (!response.ok) {
        throw new Error('Could not fetch resource');
      }

      const data = await response.json();

      // Access the sprite from the response
      const sprite: string | null = data?.sprites?.front_default;
      if (!sprite) {
        throw new Error('Pokemon sprite not found.');
      }

      // Update the sprite state
      setPokemonSprite(sprite);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if(!isLoaded || !userId ){
    return null;
}

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 bg-cover" 
    style={{ backgroundImage: "url('/pokeballBackground.jpg')"}}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center text-blue-600">Pokemon Fetcher</h1>

        <div>
          <input
            type="text"
            id="pokemonName"
            placeholder="Enter Pokemon name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={fetchData}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Fetch Pokemon
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Display Pokemon sprite if fetched */}
        {pokemonSprite && (
          <div className="flex justify-center">
            <Image src={pokemonSprite} alt="Pokemon Sprite" width={500} height={500} className="w-40 h-40 object-contain mt-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonFetcher;
