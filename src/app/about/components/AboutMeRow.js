"use client"
import styles from '../about_page.module.css'

import { about__page_self_image } from '@/constants/animationVariants';

import { aboutMeDescription } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


/**
 * Represents a column containing the self image for the AboutMeRow section
 * @returns {JSX.Element} A column element to display roundedCircle selfie image
 */
const AboutMeImgCol = function () {
    return (
        <Col className='d-flex justify-content-center flex-shrink-1' lg={{ span: 5 }}>
            <motion.div variants={about__page_self_image}>
                <Image className={`border border-3 bg-secondary border-primary ${styles.self_image}`} alt="Image of Jotham Teshome" src="/images/jotham-teshome.jpg" roundedCircle />
            </motion.div>
        </Col>
    );
};


/**
 * Represents a column containing a short description about me
 * @returns {JSX.Element} A column element to display a short description about me
 */
const AboutMeDescriptionCol = function () {
    return (
        <Col lg={{ span: 7 }}>
            {aboutMeDescription.about_me}
        </Col>
    );
};

/**
 * Represents a row containing a selfie image and short description of me
 * @returns {JSX.Element} A Row element to display the AboutMe section's content
 */
const AboutMeRow = function () {
    return (
        <Row lg={2} md={1} sm={1} xs={1} className='flex-lg-row-reverse'>
            <AboutMeImgCol />
            <AboutMeDescriptionCol />
        </Row>
    );
};

export default AboutMeRow;