import axiosInstance from '../api/axiosInstance.js';

class Games {
    async getGames(url: string) {
        const response = await axiosInstance.gameAxiosBase.get(url);
        return response.data;
    }
}

export default new Games();
