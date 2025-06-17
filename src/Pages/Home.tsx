import { useState, useEffect } from 'react';
import { CharacterCard } from '../Components/CharacterCard';
import { type Character } from '../Interfaces/Character';

function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then(res => res.json())
      .then(data => setCharacters(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} Character={character} />
      ))}
    </div>
  );
}

export default Home;
