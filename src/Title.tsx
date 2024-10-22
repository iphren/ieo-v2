import React from 'react';
import { Helmet } from 'react-helmet';

interface TitleProps {
    title: string;
}

const Title = ({ title } : TitleProps) => {
    const appTitle = 'IEO';
    return (
        <Helmet>
            <title>{`${title} | ${appTitle}`}</title>
        </Helmet>
    );
};

export default Title;
