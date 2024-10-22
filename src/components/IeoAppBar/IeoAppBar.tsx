import React from 'react';
import { useTranslation } from 'react-i18next';
import {AppBar, Button, Container, Fade, Menu, MenuItem, Toolbar} from "@mui/material";
import styles from './IeoAppBar.module.scss';

const IeoAppBar = () => {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <AppBar position="sticky" sx={{ boxShadow: 0 }}>
        <Container disableGutters>
            <Toolbar sx={{
                bgcolor: "#f8f9fa",
                boxShadow: 0
            }}>
                <div className={styles.logoImage}></div>
                <Button
                    id="courses-button"
                    aria-controls={open ? 'courses-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        color: "black"
                    }}
                >
                    {t('uk_online_courses')}
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </Container>
    </AppBar>;
}

export default IeoAppBar;
