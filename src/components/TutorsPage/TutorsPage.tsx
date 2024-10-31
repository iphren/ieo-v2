import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const TutorsPage = () => {
    const { t } = useTranslation();
    const translate = (tutorKey: string) => t(
        'uk_online_courses.content.tutors.content.' + tutorKey,
        { returnObjects: true }) as { name: string, intro: string, subjects: string };
    const tutors = [
        {
            translation: translate('wu'),
            image: '/img/people/ieo-wu.jpg'
        },
        {
            translation: translate('jason'),
            image: '/img/people/ieo-jason.jpg'
        },
        {
            translation: translate('huang'),
            image: '/img/people/ieo-huang.jpg'
        },
        {
            translation: translate('phoebe'),
            image: '/img/people/ieo-phoebe.jpg'
        },
        {
            translation: translate('selena'),
            image: '/img/people/ieo-selena.jpg'
        },
        {
            translation: translate('maddy'),
            image: '/img/people/ieo-maddy.jpg'
        },
        {
            translation: translate('christine'),
            image: '/img/people/ieo-christine.png'
        }];
    const tutorCardSize = {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
    };

    return <>
        <Title title={t('uk_online_courses.content.tutors.title')} />
        <Container fixed={true} sx={{
            my: 5,
            px: 5
        }}>
            <Typography variant="h4" sx={{ mb: 5 }} gutterBottom>
                {t('uk_online_courses.content.tutors.title')}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {tutors.map((tutor) => (
                    <Grid size={tutorCardSize} key={tutor.image}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={tutor.image}
                                title={tutor.translation.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {tutor.translation.name}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    {tutor.translation.intro}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {tutor.translation.subjects}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>))}
            </Grid>
        </Container>
    </>;
}

export default TutorsPage;
