import { type character } from "../Interfaces/character";



interface Props {
    character: character
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
    return(
        <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition">
  <img src={character.image} alt={character.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
  <h3 className="text-lg font-semibold text-gray-800">{character.name}</h3>
  <p className="text-sm text-gray-600">{character.gender}</p>
  <p className="text-sm text-gray-600">{character.homeworld}</p>
        </div>
        
    );
}
