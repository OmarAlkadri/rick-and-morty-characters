import { create } from 'zustand';

export type FilterState = {
    status: string;
    gender: string;
    setStatus: (status: string) => void;
    setGender: (gender: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
    status: '',
    gender: '',
    setStatus: (status) => set({ status }),
    setGender: (gender) => set({ gender }),
}));
