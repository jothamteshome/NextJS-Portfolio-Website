import styles from '../about_page.module.css'

import { content_row_variant } from '@/constants/animationVariants';

import { aboutMeDescription, generalInfo } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


/**
 * Represents a column containing the self image for the AboutMeRow section
 * @returns {JSX.Element} A column element to display roundedCircle selfie image
 */
const AboutMeImgCol = function () {
    const about_image = generalInfo.images.about_image;
    return (
        <Col className='d-flex justify-content-center flex-shrink-1' lg={{ span: 5 }}>
            <Image className={`border border-3 border-primary-subtle ${styles.self_image}`} alt={about_image.alt} src={about_image.src} roundedCircle />
        </Col>
    );
};


/**
 * Represents a column containing a short description about me
 * @returns {JSX.Element} A column element to display a short description about me
 */
const AboutMeDescriptionCol = function () {
    return (
        <Col lg={{ span: 6 }} className={`mt-3 mt-lg-0 ${styles.description_col} overflow-y-auto d-flex flex-column justify-content-center`}>
            {
                aboutMeDescription.about_me.map((paragraph, i) => (
                    <p key={i} className='fs-5'>{paragraph}</p>
                ))
            }
        </Col>
    );
};

/**
 * Represents a row containing a selfie image and short description of me
 * @returns {JSX.Element} A Row element to display the AboutMe section's content
 */
const AboutMeRow = function () {
    return (
        <motion.div variants={content_row_variant} className='w-100'>
            <Row lg={2} md={1} sm={1} xs={1} className='flex-lg-row-reverse justify-content-between'>
                <AboutMeImgCol />
                <AboutMeDescriptionCol />
            </Row>
        </motion.div>
    );
};

export default AboutMeRow;