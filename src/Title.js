import React from 'react';
import { Helmet } from 'react-helmet';

const Title = ({ title }) => {
    const appTitle = 'IEO';
    return (
        <Helmet>
            <title>{`${title} | ${appTitle}`}</title>
        </Helmet>
    );
};

export default Title;
