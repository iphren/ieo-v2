import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const NewsFeed = () => {
    const { t } = useTranslation();

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center">{t('home.news_feed')}</Typography>
    </Container>;
}

export default NewsFeed;
