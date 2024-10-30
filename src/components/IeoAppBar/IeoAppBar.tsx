import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import styles from './IeoAppBar.module.scss';
import CoursesButton from "./CoursesButton/CoursesButton";

const IeoAppBar = () => {
    const { t } = useTranslation();

    return <AppBar position="sticky" sx={{
        bgcolor: "#f8f9fa",
        boxShadow: 0
    }}>
        <Container disableGutters maxWidth={false}>
            <Toolbar disableGutters sx={{
                bgcolor: "#f8f9fa",
                boxShadow: 0,
                height: "4.75rem",
                padding: "0 1rem"
            }}>
                <div className={styles.logoImage}></div>
                <Button
                    id="home-button"
                    className={styles.navButton}
                    component={Link}
                    to="/"
                >
                    {t('home_page')}
                </Button>
                <CoursesButton />
            </Toolbar>
        </Container>
    </AppBar>;
}

export default IeoAppBar;
