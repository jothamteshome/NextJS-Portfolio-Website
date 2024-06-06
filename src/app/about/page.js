"use client"
import styles from './about_page.module.css'

import {
    route_page_variant,
    about__page_skill_card_variant,
    about__page_skill_grid_variant,
    about__page_self_image
} from '@/constants/animationVariants';

import { skills, aboutMeDescription } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


/**
 * Represents a card containing a skill's name and icon
 * @param {object} props - The prop object
 * @param {object} props.skill - The skill containing a name and icon 
 * @returns {JSX.Element} A card element to display a skill's name and icon
 */
const SkillCard = function ({ skill }) {
    return (
        <motion.div variants={about__page_skill_card_variant}>
            <Card className={`bg-body-secondary ${styles.skill_card}`}>
                <Card.Img className={styles.icon} src={skill.icon} alt={`Icon for ${skill.name}`} />
                <Card.Footer className={`d-flex align-items-center justify-content-center ${styles.skill_card_footer}`}>
                    <p className='mb-0 text-body text-center'>{skill.name}</p>
                </Card.Footer>
            </Card>
        </motion.div>
    );
}


/**
 * Represents a grid containing multiple SkillCard elements
 * @returns {JSX.Element} A Row element to display multiple skills in a grid
 */
const SkillsGrid = function () {
    return (
        <motion.div variants={about__page_skill_grid_variant}>
            <Row className="gy-5" xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
                {
                    skills.map((skill, i) => (
                        <Col key={i} className='d-flex justify-content-center'>
                            <SkillCard key={i} skill={skill} />
                        </Col>
                    ))
                }
            </Row>
        </motion.div>
    );
};


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
}

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

/**
 * Represents a Container containing an introduction and the skills I possess
 * @returns {JSX.Element} A container displaying an `AboutMe` section and a `Skills` section
 */
const AboutPage = function () {
    return (
        <Container className="d-flex flex-column w-75" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="Who Am I?">
                    <AboutMeRow />
                </ContentSection>
                <ContentSection section_title="What I Know">
                    <SkillsGrid />
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default AboutPage;