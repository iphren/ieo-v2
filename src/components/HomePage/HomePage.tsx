import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import NewsFeed from "./NewsFeed/NewsFeed";
import Admissions from "./Admissions/Admissions";
import ContactUs from "./ContactUs/ContactUs";

const HomePage = () => {
    const { t } = useTranslation();
    return <div>
        <Title title={t('home_page')}/>
        <HomeCarousel />
        <NewsFeed />
        <Admissions />
        <ContactUs />
    </div>;
};

export default HomePage;
