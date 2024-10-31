import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const Admissions = () => {
    const { t } = useTranslation();

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center">{t('home.admissions')}</Typography>
    </Container>;
}

export default Admissions;
