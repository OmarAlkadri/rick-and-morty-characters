// app/characters/_components/CharacterCard/index.tsx
export type Character = {
    id: string;
    name: string;
    status: string;
    gender: string;
    image: string;
};

const CharacterCard = ({ character }: { character: Character }) => {
    return (
        <div className="border  hover:bg-gray-300 dark:hover:bg-gray-300 border-black rounded p-4 shadow-md mb-4">
            <img src={character.image} alt={character.name} className="rounded-full w-24 h-24" />
            <h3 className="text-xl font-bold">{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};

export default CharacterCard;
