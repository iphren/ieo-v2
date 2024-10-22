import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const HomePage = () => {
    const { t } = useTranslation();
    return <div>
        <Title title={t('home_page')}/>
        <h2>{t('home_page')}</h2>
    </div>;
};

export default HomePage;
