// app/characters/page.tsx
"use client"; // يجب إضافة هذا السطر في الأعلى
import { useFilterStore } from '@/stores/filterStore';
import { useCharactersQuery } from '@/lib/api';
import CharacterCard from './_components/CharacterCard';
import FilterForm from './_components/FilterForm';
import LoadingSpinner from './_components/LoadingSpinner';

const CharactersPage = () => {
    const { status, gender } = useFilterStore();
    const { data, isLoading, isError } = useCharactersQuery({ status, gender });

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>

            <FilterForm />

            {isLoading && <LoadingSpinner />}
            {isError && <p>Error loading characters...</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((character: any) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default CharactersPage;
