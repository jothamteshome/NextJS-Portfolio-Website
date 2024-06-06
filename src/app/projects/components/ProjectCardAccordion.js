"use client"
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import ProjectBadgeRow from './ProjectBadgeRow';
import ProjectLinksRow from './ProjectLinksRow';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


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
const ProjectCardAccordion = function ({ project }) {
    return (
        <Accordion defaultActiveKey={0} className='d-block d-md-none'>
            <Accordion.Item eventKey={1}>
                <Accordion.Header>
                    <Stack>
                        {project.name}
                        <ProjectBadgeRow project={project} projectBadgeClassName='mb-1' />
                    </Stack>
                </Accordion.Header>
                <ProjectCardAccordionBody project={project} />
            </Accordion.Item>
        </Accordion>
    );
};

export default ProjectCardAccordion;