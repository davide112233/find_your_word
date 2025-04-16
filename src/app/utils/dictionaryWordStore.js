import { create } from 'zustand';

export const dictionaryWordStore = create((set) => ({
    word: '',
    setWord: (word) => set({ word }),
}));
