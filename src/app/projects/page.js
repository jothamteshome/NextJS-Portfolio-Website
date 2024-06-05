"use client"
import styles from './projects_page.module.css';

import {
    route_page_variant,
    projects__page_project_card_variant,
    projects__page_project_card_overlay_variant
} from '@/constants/animationVariants';

import { projectItems, projectBadgeDetails } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


/**
 * Represents a badge icon denoting the type of project
 * @param {object} props - The props object
 * @param {string} props.badge_type - A string denoting the type of badge to create
 * @param {string} props.className - A string to pass class stylings down to child 
 * @returns {JSX.Element} Returns a Badge element with its text and coloring modified for a specific badge_type
 */
const ProjectBadge = function ({ badge_type, className }) {

    // Retreive the badge styling details for the current project type
    const badge_details = projectBadgeDetails[badge_type];

    return (
        // Override the text and background color of the badge
        <Badge style={{
            color: `${badge_details.txt_color}!important`,
            backgroundColor: `${badge_details.bg_color}!important`
        }} className={`${className} me-1`}>
            {badge_type}
        </Badge>
    );
};


/**
 * Represents the row of badges showing the type of the subject matter of the project e.g ("Web", "ML", ...)
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a give project
 * @param {string} props.className - A string to pass class stylings down to child
 * @returns {JSX.Element} A row element containing multiple badges for the given project
 */
const ProjectBadgeRow = function ({ project, className }) {
    return (
        <Row className="ps-2" xs="auto">
            {
                project.badges.map((badge_type, i) => (
                    <Col key={i} className='p-0'>
                        <ProjectBadge badge_type={badge_type} className={className} />
                    </Col>
                ))

            }
        </Row>
    );

};


/**
 * Represents the accordion describing details about a project that
 * appears on below the image when pages are small
 * @param {object} props - The props object 
 * @param {object} props.project - An object containing information about a give project
 * @returns {JSX.Element} An accordion containing the name, description, and 
 * additional details of where to find a project
 */
const ProjectCardAccordionDescription = function ({ project }) {
    return (
        <Accordion defaultActiveKey={0} className='d-block d-md-none'>
            <Accordion.Item eventKey={1}>
                <Accordion.Header>
                    <Stack>
                        {project.name}
                        <ProjectBadgeRow project={project} className='mb-1' />
                    </Stack>
                </Accordion.Header>
                <Accordion.Body>{project.description}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};


/**
 * Represents the overlay describing details about a project that
 * appears on hover when the page is large
 * @param {object} props - The props object 
 * @param {object} props.project - An object containing information about a give project
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
                <Stack direction="horizontal" className='d-flex justify-content-between'>
                    <Card.Title className='mb-1'>{project.name}</Card.Title>
                    <ProjectBadgeRow project={project} className="mb-2" />
                </Stack>
                <Card.Text>{project.description}</Card.Text>
            </Card.ImgOverlay>
        </motion.div>
    );
};


/**
 * Represents a project card with a description that displays on hover when
 * page is large and in an accordion when pages are small
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a given project
 * @returns {JSX.Element} A column element to display a project and its description
 */
const ProjectCard = function ({ project }) {
    return (
        <Col className={styles.project_card}>
            <motion.div variants={projects__page_project_card_variant} initial="initial" whileHover="hover" animate="initial">
                <Card className="ratio ratio-16x9 h-100 w-100 overflow-hidden">
                    <Card.Img alt="machines" src={project.image} className='w-100 h-100 object-fit-cover' rounded />
                    <ProjectCardOverlayDescription project={project} />
                </Card>

                <ProjectCardAccordionDescription project={project} />
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
        <Row xl={3} lg={2} xs={1} className='gy-4'>
            {
                projectItems.map((project, i) => (
                    <ProjectCard key={i} project={project} />
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