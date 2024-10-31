import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Fade, Menu, MenuItem } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
import styles from '../IeoAppBar.module.scss';

const LanguagesButton = () => {
    const { i18n } = useTranslation();
    const [activeLanguage, setActiveLanguage] = React.useState<string>(i18n.language);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (language: string) => {
        handleClose();
        i18n.changeLanguage(language).then(() => {
            setActiveLanguage(language);
        });
    };

    return <>
        <IconButton
            id="languages-button"
            className={styles.navButton}
            aria-controls={open ? 'languages-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <TranslateIcon />
        </IconButton>
        <Menu
            id="languages-menu"
            MenuListProps={{
                'aria-labelledby': 'languages-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem
                className={styles.menuItem}
                selected={activeLanguage === 'en-GB'}
                onClick={() => changeLanguage('en-GB')}>
                English
            </MenuItem>
            <MenuItem
                className={styles.menuItem}
                selected={activeLanguage === 'zh-CN'}
                onClick={() => changeLanguage('zh-CN')}>
                简体中文
            </MenuItem>
        </Menu>
    </>;
}

export default LanguagesButton;
