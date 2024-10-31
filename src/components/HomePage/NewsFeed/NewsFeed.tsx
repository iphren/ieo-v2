import React from 'react';
import { Container, Typography, Card, CardMedia, Box } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Feed, SupportedLanguages } from "../../../types";
import news from "../../../data/news.json";

const NewsFeed = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language as SupportedLanguages;
    const newsFeeds: Feed[] = news;

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center" gutterBottom>{t('home.news_feed')}</Typography>
        {newsFeeds.map((feed) => {
            return <Card sx={{
                my: 1,
                display: 'flex',
                alignItems: 'center',
                p: 2,
                '&:hover': {
                    bgcolor: 'rgb(248, 249, 250)',
                },
            }} key={feed.url} elevation={4}>
                <CardMedia
                    component="a"
                    href={feed.url}
                    target="_blank"
                    image={feed.img}
                    title={feed.title[currentLanguage]}
                    sx={{
                        width: 200,
                        minWidth: 200,
                        height: 85,
                        mr: 2,
                    }}
                />
                <Box sx={{ flexGrow: 1, p: 0 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            {feed.title[currentLanguage]}
                        </Typography>
                        <Typography variant="body1">
                            {feed.description[currentLanguage]}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="caption">
                            {feed.author[currentLanguage]} | {feed.site[currentLanguage]}
                        </Typography>
                        <Typography variant="caption">
                            {feed.date}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        })}
    </Container>;
}

export default NewsFeed;
