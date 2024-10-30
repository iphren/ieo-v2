import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import styles from '../IeoAppBar.module.scss';

const CoursesButton = () => {
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
            id="courses-button"
            className={styles.navButton}
            aria-controls={open ? 'courses-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {t('uk_online_courses.title')}
        </Button>
        <Menu
            id="courses-menu"
            MenuListProps={{
                'aria-labelledby': 'courses-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem
                className={styles.menuItem}
                component={Link}
                to="/choose-us"
                onClick={handleClose}>
                {t('uk_online_courses.content.choose_us.title')}
            </MenuItem>
            <MenuItem
                className={styles.menuItem}
                component={Link}
                to="/tutors"
                onClick={handleClose}>
                {t('uk_online_courses.content.tutors.title')}
            </MenuItem>
        </Menu>
    </>;
}

export default CoursesButton;
