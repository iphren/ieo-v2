import React from 'react';
import { Container, Typography, Card, Box, TextField, Button } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { sendMessage } from "../../../services/ResourcesService";
import { Message } from "../../../types";

const ContactUs = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isValid },
    } = useForm();

    const onSubmit = (data: Message) => {
        sendMessage(data).then(() => {
            reset();
        });
    };

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Card elevation={0} sx={{ bgcolor: 'rgb(233, 236, 239)', p: { xs: 3, sm: 5 } }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>{t('contact_us.title')}</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit((data) => onSubmit(data as Message))}
                sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ flexGrow: 1, pr: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 0 } }}>
                    <TextField
                        id="form_message"
                        {...register('form_message', { required: true })}
                        error={Boolean(errors.form_message)}
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
                        {...register('form_name', { required: true })}
                        error={Boolean(errors.form_name)}
                        label={t('contact_us.content.name')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="email"
                        {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
                        error={Boolean(errors.email)}
                        label={t('contact_us.content.email')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="form_phone"
                        {...register('form_phone', { pattern: /^[0-9+()\s-]*$/ })}
                        error={Boolean(errors.form_phone)}
                        label={t('contact_us.content.phone')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <TextField
                        id="form_wechat"
                        {...register('form_wechat', { pattern: /^[a-zA-Z][a-zA-Z\d_-]{5,19}$/ })}
                        error={Boolean(errors.form_wechat)}
                        label={t('contact_us.content.wechat')}
                        fullWidth
                        sx={{ mb: 2 }}
                        variant="outlined" />
                    <Button
                        fullWidth
                        type="submit"
                        disabled={!isDirty || !isValid}
                        variant="contained">
                        {t('contact_us.content.send')}
                    </Button>
                </Box>
            </Box>
        </Card>
    </Container>;
}

export default ContactUs;
