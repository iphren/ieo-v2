import React from 'react';
import { useTranslation } from 'react-i18next';
import {AppBar, Button, Container, Toolbar} from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import styles from './IeoAppBar.module.scss';
import CoursesButton from "./CoursesButton/CoursesButton";
import UniversitiesButton from "./UniversitiesButton/UniversitiesButton";

export const activePage = (currentPath: string, path: string) => {
    return currentPath === path ? styles.activePage : "";
}

const IeoAppBar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const currentPath = location.pathname;

    return <AppBar position="sticky" sx={{
        bgcolor: "#f8f9fa",
        boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)"
    }}>
        <Container disableGutters maxWidth={false}>
            <Toolbar disableGutters sx={{
                bgcolor: "#f8f9fa",
                boxShadow: 0,
                height: "4.75rem",
                padding: "0 1rem"
            }}>
                <Link to="/">
                    <div className={styles.logoImage}></div>
                </Link>
                <Button
                    id="home-button"
                    className={`${styles.navButton} ${activePage(currentPath, "/")}`}
                    component={Link}
                    to="/"
                >
                    {t('home_page')}
                </Button>
                <CoursesButton path={currentPath} />
                <UniversitiesButton path={currentPath} />
            </Toolbar>
        </Container>
    </AppBar>;
}

export default IeoAppBar;
