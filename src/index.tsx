import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import App from './App';
import './i18n';

async function enableMocking() {
    if (import.meta.env.PROD) {
        return;
    }
    const { worker } = await import('./mocks/browser');
    return worker.start();
}

enableMocking().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
})
