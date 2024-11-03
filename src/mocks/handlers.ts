import { http, HttpResponse } from 'msw';
import { Rankings } from "../types";
import { rankingsList } from "./data/Rankings";

export const handlers = [
    http.get('/api/rankings', () => {
        return HttpResponse.json<Rankings[]>(rankingsList)
    }),
    http.post('/api/messages', () => {
        return HttpResponse.json({ message: '🤔' });
    }),
]
