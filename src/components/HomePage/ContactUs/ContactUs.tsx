import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation();

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center" gutterBottom>{t('contact_us.title')}</Typography>
    </Container>;
}

export default ContactUs;
