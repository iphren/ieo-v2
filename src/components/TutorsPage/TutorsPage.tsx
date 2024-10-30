import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const TutorsPage = () => {
    const { t } = useTranslation();

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h4" sx={{ mb: 5 }} gutterBottom>
            {t('uk_online_courses.content.tutors.title')}
        </Typography>
    </Container>;
}

export default TutorsPage;
