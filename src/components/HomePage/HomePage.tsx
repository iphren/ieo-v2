import React from 'react';
import Title from "../../Title";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return <div>
        <Title title={t('home_page')}/>
        <h2>{t('home_page')}</h2>
    </div>;
};

export default HomePage;
