import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
