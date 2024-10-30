import React from 'react';
import { Container, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();

    return <Container sx={{
        my: 10,
        px: 5,
        textAlign: "center"
    }}>
        <div className={styles.row}>
            <div className={styles.wechat1}>
                <Typography variant="button">
                    {t('wechat_public')}
                </Typography>
                <div className={`${styles.qrcode} ${styles.image}`}></div>
            </div>
            <div className={styles.wechat2}>
                <Typography variant="button">
                    {t('wechat_helper')}
                </Typography>
                <div className={`${styles.qrcode} ${styles.image}`}></div>
            </div>
            <div>
                <div className={styles.contact}>
                    <Typography variant="button">{t('email')}</Typography>
                    <Typography variant="body1">info@inedu.online</Typography>
                </div>
                <div className={styles.contact}>
                    <Typography variant="button">{t('phone')}</Typography>
                    <Typography variant="body1">+44 (0) 776 3755 435</Typography>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div>
                <div className={`${styles.englishUk} ${styles.image}`}></div>
            </div>
            <div>
                <div className={`${styles.britishCouncil} ${styles.image}`}></div>
            </div>
        </div>
    </Container>;
}

export default Footer;
