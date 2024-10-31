import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Feed } from "../../../types";
import news from "../../../data/news.json";

const NewsFeed = () => {
    const { t } = useTranslation();
    const newsFeed: Feed[] = news;
    console.log(newsFeed);

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center">{t('home.news_feed')}</Typography>
    </Container>;
}

export default NewsFeed;
