import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChooseUsPage from "./components/ChooseUsPage/ChooseUsPage";
import TutorsPage from "./components/TutorsPage/TutorsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/choose-us" element={<ChooseUsPage />} />
            <Route path="/tutors" element={<TutorsPage />} />
        </Routes>
    );
}

export default AppRoutes;
