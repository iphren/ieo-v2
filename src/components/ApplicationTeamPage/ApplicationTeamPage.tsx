import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useTranslation } from 'react-i18next';
import Title from "../../Title";

const ApplicationTeamPage = () => {
    const { t } = useTranslation();
    const translate = (tutorKey: string) => t(
        'uk_top_universities.content.application_team.content.team.' + tutorKey,
        { returnObjects: true }) as { name: string, intro: string };
    const team = [
        {
            translation: translate('jiajie'),
            image: '/img/people/ieo-jiajie.jpg'
        },
        {
            translation: translate('mccloskey'),
            image: '/img/people/ieo-mccloskey.jpg'
        },
        {
            translation: translate('danni'),
            image: '/img/people/ieo-danni.jpg'
        }];
    return <>
        <Title title={t('uk_top_universities.content.application_team.title')} />
        <Container fixed={true} sx={{
            my: 5,
            px: 5
        }}>
            <Card elevation={0} sx={{ bgcolor: 'rgb(233, 236, 239)', p: { xs: 3, sm: 5 } }}>
                <Typography variant="h3" sx={{ mb: 4 }}>
                    {t('uk_top_universities.content.application_team.title')}
                </Typography>
                <Typography variant="body1">
                    {t('uk_top_universities.content.application_team.content.intro')}
                </Typography>
            </Card>
            {team.map((member) => (
                <Card sx={{ display: { xs: 'block', sm: 'flex' }, mt: 5 }} elevation={2} key={member.image}>
                    <CardMedia
                        component="img"
                        sx={{ width: { xs: '100%', sm: 240 } }}
                        image={member.image}
                        title={member.translation.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {member.translation.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {member.translation.intro}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    </>;
}

export default ApplicationTeamPage;
