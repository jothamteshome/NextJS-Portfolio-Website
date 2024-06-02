"use client"
import styles from './about_page.module.css'

import { skills } from '@/constants';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
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
        <Card className={`bg-body-secondary ${styles.skill_card}`}>
            <Card.Img className={styles.icon} src={skill.icon} alt={`Icon for ${skill.name}`} />
            <Card.Footer className="text-body text-center">{skill.name}</Card.Footer>
        </Card>
    );
}


/**
 * Represents a grid containing multiple SkillCard elements
 * @returns {JSX.Element} A Row element to display multiple skills in a grid
 */
const SkillsGrid = function () {
    return (
        <Row className="gy-5" xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
            {
                skills.map((skill, i) => (
                    <Col key={i} className='d-flex justify-content-center'>
                        <SkillCard key={i} skill={skill} />
                    </Col>
                ))
            }
        </Row>
    );
};


/**
 * Represents a column containing the self image for the AboutMeRow section
 * @returns {JSX.Element} A column element to display roundedCircle selfie image
 */
const AboutMeImgCol = function () {
    return (
        <Col className='d-flex justify-content-center flex-shrink-1'>
            <Image className={styles.self_image} alt="Image of Jotham Teshome" src="/images/jotham-teshome.jpg" roundedCircle />
        </Col>
    );
};


/**
 * Represents a column containing a short description about me
 * @returns {JSX.Element} A column element to display a short description about me
 */
const AboutMeShortDesc = function () {
    return (
        <Col>
            Im Jotham!
        </Col>
    );
}

/**
 * Represents a row containing a selfie image and short description of me
 * @returns {JSX.Element} A Row element to display the AboutMe section's content
 */
const AboutMeRow = function () {
    return (
        <Row lg={2} md={1} sm={1} xs={1}>
            <AboutMeImgCol />
            <AboutMeShortDesc />
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
            <Row>
                <Col xs={12}>About Me</Col>
                <Col xs={12}>
                    <AboutMeRow />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    Skills
                </Col>
                <Col xs={12}>
                    <SkillsGrid />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;