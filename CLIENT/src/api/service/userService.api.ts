import axios from '../../config/axios';

export const searchProduct = (query: string) => {
    return axios.get('/search', {
        params: {
            q: query,
        },
    });
};
