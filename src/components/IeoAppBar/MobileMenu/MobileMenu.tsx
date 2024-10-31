import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { activePage } from "../IeoAppBar";
import styles from "../IeoAppBar.module.scss";

interface NavProps {
    path : string;
}

const MobileMenu = ({ path } : NavProps) => {
    const { t } = useTranslation();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setOpen(open);
            };

    return <>
        <IconButton
            id="mobile-menu-button"
            className={styles.navButton}
            onClick={toggleDrawer(true)}
        >
            <MenuIcon />
        </IconButton>
        <SwipeableDrawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/"
                            selected={Boolean(activePage(path, "/"))}>
                            <ListItemText primary={t('home_page')} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText secondary={t('uk_online_courses.title')} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/choose-us"
                            selected={Boolean(activePage(path, "/choose-us"))}>
                            <ListItemText primary={t('uk_online_courses.content.choose_us.title')} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/tutors"
                            selected={Boolean(activePage(path, "/tutors"))}>
                            <ListItemText primary={t('uk_online_courses.content.tutors.title')} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText secondary={t('uk_top_universities.title')} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/university-rankings"
                            selected={Boolean(activePage(path, "/university-rankings"))}>
                            <ListItemText primary={t('uk_top_universities.content.university_rankings.title')} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/application-team"
                            selected={Boolean(activePage(path, "/application-team"))}>
                            <ListItemText primary={t('uk_top_universities.content.application_team.title')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </SwipeableDrawer>
    </>;
}

export default MobileMenu;
