"use client"
import styles from './projects_page.module.css';

import {
    route_page_variant,
    projects__page_project_card_variant,
    projects__page_project_card_overlay_variant
} from '@/constants/animationVariants';

import { projectIcons, projectItems, projectBadgeDetails } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Image from 'react-bootstrap/Image';
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
 * Represents an icon link to an external site
 * @param {object} props - The props object
 * @param {object} props.link_info - An object containng information about an external link 
 * @returns {JSX.Element} Returns a column containing an icon link to an external site
 */
const ProjectLink = function ({ link_info }) {
    // Take lowercase identifier of link type and use in image alt text
    let alt_text_link_type = link_info.link_type.split("_");
    alt_text_link_type = alt_text_link_type.map((word) => (word.charAt(0).toUpperCase() + word.substr(1))).join(" ")

    return (
        <Col className='p-0 pb-2 pe-md-1 pb-md-0 col-auto'>
            <a href={link_info.link}>
                <Image alt={`${alt_text_link_type} link for ${link_info.project_name}`} src={projectIcons[link_info.link_type]}
                    className={styles.project_link_icon} />
            </a>
        </Col>
    );
};


/**
 * Represents a row containing links to external sites related to project
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project
 * @returns {JSX.Element} A Row element containing links related to a project if they exist
 */
const ProjectLinksRow = function ({ project }) {
    // Store a list of project links associated with a given project
    const project_links = [];

    // Check if github link exists for project
    if (project.links.github) {
        project_links.push({ link_type: "github", project_name: project.name, link: project.links.github });
    }

    // Check if live demo link exists for project
    if (project.links.live_demo) {
        project_links.push({ link_type: "live_demo", project_name: project.name, link: project.links.live_demo })
    }


    return (
        <Row className='w-100 mx-auto' xs={1} sm={1} md="auto">
            {
                project_links.map((link, i) => (
                    <ProjectLink key={i} link_info={link} />
                ))
            }
        </Row>
    );
};


/**
 * Represents the AccordionBody for describing a project on small screens
 * @param {object} props - The props object 
 * @param {object} props.project - An object containing information about a project
 * @returns {JSX.Element} Returns an AccordionBody element containing the description and links of a project
 * for the ProjectCardAccordionDescription
 */
const ProjectCardAccordionBody = function ({ project }) {
    return (
        <Accordion.Body>
            <Row className='justify-content-sm-between'>
                <Col xs={{ span: 9 }}>
                    {project.description}
                </Col>
                <Col xs={{ span: 2 }}>
                    <ProjectLinksRow project={project} />
                </Col>
            </Row>
        </Accordion.Body>
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
                <ProjectCardAccordionBody project={project} />
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
                <Container className='h-100 p-0 pb-4 d-flex flex-column justify-content-between'>
                    <Card.Text className='text-wrap text-truncate'>{project.description}</Card.Text>
                    <ProjectLinksRow project={project} />
                </Container>
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