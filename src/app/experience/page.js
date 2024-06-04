"use client"
import styles from './experience_page.module.scss';

import {
    route_page_variant,
    experience__page_card_list_variant,
    experience__page_card_variant
} from '@/constants/animationVariants';

import { experienceItems, educationItems } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Row from 'react-bootstrap/Row';


/**
 * Represents a card displaying information about an academic institution I have attended
 * @param {object} props - The props object
 * @param {object} props.education - Object containing information about my education 
 * @returns {JSX.Element} A card element to display my education
 */
const EducationCard = function ({ education }) {
    // Initialize coursework element to empty <p /> tag
    let coursework_element = <p />;

    // If education exists within `education` object, create list element
    if (education.coursework.length) {
        coursework_element = <li>
            <p className="fst-italic">
                <span className="fst-normal">Coursework: </span>
                {education.coursework.join(", ")}
            </p>
        </li>
    }

    return (
        <Card className="bg-body-secondary">
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col lg={4} className='d-flex justify-content-center align-items-center'>
                    <Card.Img className={styles.logo} variant="top" alt={`Logo for ${education.institution}`} src={education.logo} />
                </Col>
                <Col lg={8}>
                    <Card.Body>
                        <Card.Title className="fs-4 text-primary-emphasis">{education.institution}</Card.Title>
                        <Card.Subtitle className="fs-5">{`${education.start_date} - ${education.end_date}`}</Card.Subtitle>
                        <Card.Subtitle className='my-1 fs-5 fst-italic'>{education.degree_aquired} - GPA: {education.gpa}</Card.Subtitle>
                        <Card.Text as="ul">
                            {coursework_element}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};


/**
 * Represents a card displaying information about a position I have held
 * @param {object} props - The props object
 * @param {object} props.experience - Object containing information about a position I have held 
 * @returns {JSX.Element} A card element to display my past job experience
 */
const ExperienceCard = function ({ experience }) {
    return (
        <Card className="bg-body-secondary">
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col lg={4} className='d-flex justify-content-center align-items-center'>
                    <Card.Img className={styles.logo} variant="top" alt={`Logo for ${experience.employer}`} src={experience.logo} />
                </Col>
                <Col lg={8}>
                    <Card.Body>
                        <Card.Title className="fs-4 text-primary-emphasis">{experience.employer}</Card.Title>
                        <Card.Subtitle className="fs-5">{`${experience.start_date} - ${experience.end_date}`}</Card.Subtitle>
                        <Card.Subtitle className='my-1 fs-5 fst-italic'>{experience.role}</Card.Subtitle>
                        <Card.Text as="ul">
                            {
                                experience.tasks_completed.map((task, i) => (
                                    <li key={i}>
                                        <p>{task}</p>
                                    </li>
                                ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};


/**
 * Represents a list of cards containing information specified by the list_items and ListCard parameters
 * @param {object} props - The props object
 * @param {Array.<Object>} list_items - Array containing objects containing information to display on a Card element
 * @param {JSX.Element} ListCard - Generic card placeholder for card element belonging to this list
 * @returns {JSX.Element} Returns a Row element containing a list of cards
 */
const ExperiencesPageCardList = function ({ list_items, ListCard }) {
    return (
        <motion.div variants={experience__page_card_list_variant}>
            <Row className='gy-3'>
                {
                    list_items.map((item, i) => (
                        <motion.div key={i} variants={experience__page_card_variant}>
                            <ListCard item={item} />
                        </motion.div>
                    ))
                }
            </Row>
        </motion.div>
    );
};


/**
 * Represents a Container containing my previous job experience and education
 * @returns {JSX.Element} A container displaying an `Experiences` section and an `Education` section
 */
const ExperiencesPage = function () {
    return (
        <Container className="d-flex flex-column w-75" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="Experiences">
                    <ExperiencesPageCardList
                        list_items={experienceItems}
                        ListCard={({ item }) => <ExperienceCard experience={item} />} />
                </ContentSection>

                <ContentSection section_title="Education">
                    <ExperiencesPageCardList
                        list_items={educationItems}
                        ListCard={({ item }) => <EducationCard education={item} />} />
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default ExperiencesPage;