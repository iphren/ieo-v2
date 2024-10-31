import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const UniversityRankingsPage = () => {
    const { t } = useTranslation();
    return <>
        <Title title={t('uk_top_universities.content.university_rankings.title')} />
    </>;
}

export default UniversityRankingsPage;
