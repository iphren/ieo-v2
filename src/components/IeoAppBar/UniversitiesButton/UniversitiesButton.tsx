import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import { activePage } from "../IeoAppBar";
import styles from '../IeoAppBar.module.scss';

interface NavProps {
    path : string;
}

const UniversitiesButton = ({ path } : NavProps) => {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <Button
            id="universities-button"
            className={`${styles.navButton} ${activePage(path, "/application-team")} ${activePage(path, "/university-rankings")}`}
            aria-controls={open ? 'universities-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {t('uk_top_universities.title')}
        </Button>
        <Menu
            id="universities-menu"
            MenuListProps={{
                'aria-labelledby': 'universities-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem
                className={styles.menuItem}
                selected={Boolean(activePage(path, "/university-rankings"))}
                component={Link}
                to="/university-rankings"
                onClick={handleClose}>
                {t('uk_top_universities.content.university_rankings.title')}
            </MenuItem>
            <MenuItem
                className={styles.menuItem}
                selected={Boolean(activePage(path, "/application-team"))}
                component={Link}
                to="/application-team"
                onClick={handleClose}>
                {t('uk_top_universities.content.application_team.title')}
            </MenuItem>
        </Menu>
    </>;
}

export default UniversitiesButton;
