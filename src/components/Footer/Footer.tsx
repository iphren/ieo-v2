import React from 'react';
import { Container } from "@mui/material";
import styles from './Footer.module.scss';

const Footer = () => {
    return <Container sx={{
        my: 5,
        px: 5,
        textAlign: "center"
    }}>
        footer
    </Container>;
}

export default Footer;
