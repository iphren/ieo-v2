import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChooseUsPage from "./components/ChooseUsPage/ChooseUsPage";
import TutorsPage from "./components/TutorsPage/TutorsPage";
import ApplicationTeamPage from "./components/ApplicationTeamPage/ApplicationTeamPage";
import UniversityRankingsPage from "./components/UniversityRankingsPage/UniversityRankingsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/choose-us" element={<ChooseUsPage />} />
            <Route path="/tutors" element={<TutorsPage />} />
            <Route path="/university-rankings" element={<UniversityRankingsPage />} />
            <Route path="/application-team" element={<ApplicationTeamPage />} />
        </Routes>
    );
}

export default AppRoutes;
