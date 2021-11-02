import React from 'react';
import { Carousel } from 'react-bootstrap';
import Header from '../../Header/Header';
import ban1 from '../../../share/banner-1.jpg'
import ban2 from '../../../share/banner-2.jpg'
import ban3 from '../../../share/banner-3.jpg'
import ban4 from '../../../share/banner-4.jfif'
import '../Home/Home.css'
import Package from '../package/Package';
import WhyUs from '../../../why/WhyUs';
import Footer from '../../footer/Footer';
import Heritage from '../Heritage/Heritage';

import { HashLink } from 'react-router-hash-link';


const Home = () => {
    return (
        <div id="home">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="home"
                        src={ban1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="home"
                        src={ban2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Seint martin</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="home"
                        src={ban3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hill Tracts</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Package></Package>
            <Heritage></Heritage>
            <WhyUs></WhyUs>

        </div>

    );

};

export default Home;