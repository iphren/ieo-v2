import axios, { AxiosResponse } from 'axios';
import { Message, Rankings } from "../types";

const baseUrl = import.meta.env.VITE_IEO_API_URL || "/api";

export const getRankings = async () => {
    const response = await axios.get<Rankings[]>(
        `${baseUrl}/rankings`);
    return response.data;
}

export const sendMessage = async (data: Message) => {
    await axios.post<null, AxiosResponse<null>, Message>(
        `${baseUrl}/messages`,
        data
    );
}
