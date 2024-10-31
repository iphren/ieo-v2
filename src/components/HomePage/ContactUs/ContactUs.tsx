import React from 'react';
import { Container, Typography, Card, Box, TextField, Button } from "@mui/material";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation();

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Card elevation={0} sx={{ bgcolor: 'rgb(233, 236, 239)', p: { xs: 3, sm: 5 } }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>{t('contact_us.title')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ flexGrow: 1, pr: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 0 } }}>
                    <TextField
                        id="form_message"
                        label={t('contact_us.content.message')}
                        helperText={t('contact_us.content.message_helper')}
                        multiline
                        fullWidth
                        rows={12}
                        variant="outlined" />
                </Box>
                <Box sx={{ minWidth: { xs: '100%', sm: 200 }, maxWidth: { xs: '100%', sm: 200 } }}>
                    <TextField
                        id="form_name"
                        label={t('contact_us.content.name')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="form_email"
                        label={t('contact_us.content.email')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="form_phone"
                        label={t('contact_us.content.phone')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="form_wechat"
                        label={t('contact_us.content.wechat')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <Button
                        fullWidth
                        variant="contained">
                        {t('contact_us.content.send')}
                    </Button>
                </Box>
            </Box>
        </Card>
    </Container>;
}

export default ContactUs;
