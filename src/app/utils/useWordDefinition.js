import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useWordDefinition = (word) => {
    return useQuery({
        queryKey: ['word-definition', word],
        queryFn: async () => {
            const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            return data;
        },
        enabled: !!word,
    });
};
