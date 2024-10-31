import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, Divider, Box, Tabs, Tab, Paper } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import Title from "../../Title";
import { getRankings } from "../../services/RankingsService/RankingsService";
import { Rankings } from "../../types";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function RankingsTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`rankings-tabpanel-${index}`}
            aria-labelledby={`rankings-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ mt: 1 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(year: number) {
    return {
        id: `rankings-tab-${year}`,
        'aria-controls': `rankings-panel-${year}`,
    };
}

const UniversityRankingsPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);
    const [rankings, setRankings] = useState<Rankings[]>([]);
    useEffect(() => {
        getRankings().then((rankings) => {
            setRankings(rankings);
            setValue(rankings.length - 1);
        });
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <>
        <Title title={t('uk_top_universities.content.university_rankings.title')} />
        <Container fixed={true} sx={{
            my: 5,
            px: 5
        }}>
            <Card elevation={0} sx={{ bgcolor: 'rgb(233, 236, 239)', p: { xs: 3, sm: 5 }, pb: { xs: 2, sm: 2 } }}>
                <Typography variant="h4" sx={{ mb: 4 }}>
                    {t('uk_top_universities.content.university_rankings.title')}
                </Typography>
                <Divider sx={{ borderColor: 'rgb(128, 128, 128)' }} />
                <Box sx={{ mt: 3 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="university rankings by years">
                        {rankings.map((ranking) => (
                            <Tab key={ranking.year} label={ranking.year} {...a11yProps(ranking.year)} />))}
                    </Tabs>
                </Box>
            </Card>

            {rankings.map((ranking, index) => (
                <RankingsTabPanel key={ranking.year} value={value} index={index}>
                    <TableContainer component={Paper}>
                        <Table aria-label="rankings table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {t('uk_top_universities.content.university_rankings.content.rank')}
                                    </TableCell>
                                    <TableCell>
                                        {t('uk_top_universities.content.university_rankings.content.university')}
                                    </TableCell>
                                    <TableCell align="right">
                                        {t('uk_top_universities.content.university_rankings.content.score')}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ranking.rankings.map((row) => (
                                    <TableRow key={row['zh-cn']}>
                                        <TableCell component="th" scope="row">
                                            {row.rank}
                                        </TableCell>
                                        <TableCell>{row['zh-cn']}</TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </RankingsTabPanel>
            ))}
        </Container>
    </>;
}

export default UniversityRankingsPage;
