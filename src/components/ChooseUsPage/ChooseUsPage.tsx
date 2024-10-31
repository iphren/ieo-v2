import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const ChooseUsPage = () => {
    const { t } = useTranslation();

    return <>
        <Title title={t('uk_online_courses.content.choose_us.title')} />
        <Container fixed={true} sx={{
            my: 5,
            px: 5
        }}>
            <Typography variant="h4" sx={{ mb: 5 }} gutterBottom>
                {t('uk_online_courses.content.choose_us.title')}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                {t('uk_online_courses.content.choose_us.content.faculty')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }} gutterBottom>
                {t('uk_online_courses.content.choose_us.content.faculty_desc')}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                {t('uk_online_courses.content.choose_us.content.students')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }} gutterBottom>
                {t('uk_online_courses.content.choose_us.content.students_desc')}
            </Typography>
        </Container>
    </>;
}

export default ChooseUsPage;
