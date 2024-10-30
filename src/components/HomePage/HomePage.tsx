import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const HomePage = () => {
    const { t } = useTranslation();
    return <div>
        <Title title={t('home_page')}/>
        <HomeCarousel />
    </div>;
};

export default HomePage;
