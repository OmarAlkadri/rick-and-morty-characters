// lib/api.ts
import axios from 'axios';
import { useQuery, useQueryClient, UseQueryOptions } from 'react-query';

export const fetchCharacters = async (filters: { status: string, gender: string }) => {
    const { status, gender } = filters;
    const url = `https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}`;
    const response = await axios.get(url);
    return response.data.results;
};

export const useCharactersQuery = (filters: { status: string, gender: string }) => {
    return useQuery(
        ['characters', filters],
        () => fetchCharacters(filters),
        {
            staleTime: 5000,
            keepPreviousData: true,
        }
    );
};
