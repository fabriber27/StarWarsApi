import { type Character } from "../Interfaces/Character";
import {  } from './../Interfaces/Character';


interface Props {
    Character: Character
}

export const CharacterCard: React.FC<Props> = ({ Character }) => {
    return(
        <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition">
  <img src={Character.image} alt={Character.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
  <h3 className="text-lg font-semibold text-gray-800">{Character.name}</h3>
  <p className="text-sm text-gray-600">{Character.gender}</p>
  <p className="text-sm text-gray-600">{Character.homeworld}</p>
        </div>
        
    );
}
