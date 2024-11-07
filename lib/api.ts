// lib/api.ts
import axios from 'axios';
import { useQuery } from 'react-query';


type Filters = {
    status: string;
    gender: string;
};

export const fetchCharacters = async (filters: Filters) => {
    const { status, gender } = filters;
    const url = `https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}`;
    const response = await axios.get(url);
    return response.data.results;
};

export const useCharactersQuery = (filters: Filters) => {
    return useQuery(
        ['characters', filters],
        () => fetchCharacters(filters),
        {
            staleTime: 5000,
            keepPreviousData: true,
        }
    );
};
