import axios from 'axios';
import { Rankings } from "../../types";

export const getRankings = async () => {
    const response = await axios.get<Rankings[]>(
        'https://d1yfas0kwd4c6z.cloudfront.net/rankings');
    return response.data;
  }
