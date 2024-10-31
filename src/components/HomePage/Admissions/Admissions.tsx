import React from 'react';
import { Container, Typography, Grid2 as Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useTranslation } from 'react-i18next';
import {AdmissionLetter, SupportedLanguages} from "../../../types";
import admissions from "../../../data/admission-letters.json";

const Admissions = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language as SupportedLanguages;
    const admissionLetters: AdmissionLetter[] = admissions;

    return <Container fixed={true} sx={{
        my: 5,
        px: 5
    }}>
        <Typography variant="h5" align="center" gutterBottom>{t('home.admissions')}</Typography>
        <Grid container spacing={2}>
            {admissionLetters.map((admissionLetter) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={admissionLetter.img}>
                    <Card elevation={4}>
                        <CardMedia
                            component="img"
                            image={admissionLetter.img}
                        />
                        <CardContent>
                            <Typography variant="body1">
                                {t('home.congrats', { university: admissionLetter.university[currentLanguage] })}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>;
}

export default Admissions;
