import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const ApplicationTeamPage = () => {
    const { t } = useTranslation();
    return <>
        <Title title={t('uk_top_universities.content.application_team.title')} />
    </>;
}

export default ApplicationTeamPage;
