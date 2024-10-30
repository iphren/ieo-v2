import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HomeCarousel.module.scss';

const HomeCarousel = () => {
    const { t } = useTranslation();
    const carouselItems = [
        { text: t('home.carousel.0'), image: '/img/slide-0.jpg' },
        { text: t('home.carousel.1'), image: '/img/slide-1.jpg' },
        { text: t('home.carousel.2'), image: '/img/slide-2.jpg' },
    ];
    return <Carousel>
        {carouselItems.map((item, index) => (
            <Carousel.Item key={index} className={styles.carouselItem}>
                <div className={styles.carouselImage}></div>
                <Carousel.Caption>
                    <h5>{item.text}</h5>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>;
}

export default HomeCarousel;
