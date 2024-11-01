import axios, { AxiosResponse } from 'axios';
import { Message, Rankings } from "../types";

export const getRankings = async () => {
    const response = await axios.get<Rankings[]>(
        'https://d1yfas0kwd4c6z.cloudfront.net/ieo/rankings');
    return response.data;
}

export const sendMessage = async (data: Message) => {
    await axios.post<null, AxiosResponse<null>, Message>(
        'https://d1yfas0kwd4c6z.cloudfront.net/ieo/messages',
        data
    );
}
