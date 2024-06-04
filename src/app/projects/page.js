"use client"
import styles from './projects_page.module.css';

import {
    route_page_variant,
    projects__page_project_card_variant,
    projects__page_project_card_overlay_variant
} from '@/constants/animationVariants';

import { projectItems } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Row from 'react-bootstrap/Row';


/**
 * Represents the accordion describing details about a project that
 * appears on below the image when pages are small
 * @param {object} props - The props object 
 * @param {object} project - An object containing information about a give project
 * @returns {JSX.Element} An accordion containing the name, description, and 
 * additional details of where to find a project
 */
const ProjectCardAccordionDescription = function ({ project }) {
    return (
        <Accordion defaultActiveKey={0} className='d-block d-md-none'>
            <Accordion.Item eventKey={1}>
                <Accordion.Header>{project.name}</Accordion.Header>
                <Accordion.Body>{project.description}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};


/**
 * Represents the overlay describing details about a project that
 * appears on hover when the page is large
 * @param {object} props - The props object 
 * @param {object} project - An object containing information about a give project
 * @returns {JSX.Element} An card image overlay containing the name, description, and 
 * additional details of where to find a project
 */
const ProjectCardOverlayDescription = function ({ project }) {
    return (
        <motion.div
            variants={projects__page_project_card_overlay_variant}
            className='d-none d-md-block'
        >
            <Card.ImgOverlay className='bg-dark bg-opacity-50'>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
            </Card.ImgOverlay>
        </motion.div>
    );
};


/**
 * Represents a project card with a description that displays on hover when
 * page is large and in an accordion when pages are small
 * @param {object} props - The props object
 * @param {object} project - An object containing information about a given project
 * @returns {JSX.Element} A column element to display a project and its description
 */
const ProjectCard = function ({ project }) {
    return (
        <Col className={styles.project_card}>
            <motion.div variants={projects__page_project_card_variant} initial="initial" whileHover="hover" animate="initial">
                <Card className="ratio ratio-16x9 h-100 w-100 overflow-hidden">
                    <Card.Img alt="machines" src={project.image} className='w-100 h-100 object-fit-cover' rounded />
                    <ProjectCardOverlayDescription project={project}/>
                </Card>
                
                <ProjectCardAccordionDescription project={project}/>
            </motion.div>
        </Col>
    );
};


/**
 * Represents a list containing multiple project cards
 * @returns {JSX.Element} A row containing multiple descriptive project cards
 */
const ProjectCardList = function () {
    return (
        <Row xl={3} md={2} xs={1} className='gy-4'>
            {
                projectItems.map((project, i) => (
                    <ProjectCard key={i} project={project}  />
                ))
            }
        </Row>
    );
}


/**
 * Represents a Container containing my previous job experience and education
 * @returns {JSX.Element} A container displaying an `Experiences` section and an `Education` section
 */
const ProjectsPage = function () {
    return (
        <Container className="d-flex flex-column w-75" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="Machine Learning">
                    <ProjectCardList />
                </ContentSection>

                <ContentSection section_title="Web Applications">
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default ProjectsPage;