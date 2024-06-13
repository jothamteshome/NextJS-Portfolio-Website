import { projects__page_project_card_overlay_variant } from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProjectBadgeRow from './ProjectBadgeRow';
import ProjectLinksRow from './ProjectLinksRow';
import Row from 'react-bootstrap/Row';


/**
 * Represents the overlay describing details about a project that
 * appears on hover when the page is large
 * @param {object} props - The props object 
 * @param {object} props.project - An object containing information about a give project
 * @returns {JSX.Element} An card image overlay containing the name, description, and 
 * additional details of where to find a project
 */
const ProjectCardOverlay = function ({ project }) {
    return (
        <motion.div
            variants={projects__page_project_card_overlay_variant}
            className='d-none d-md-block'>
            <Card.ImgOverlay className='d-flex flex-column h-100 bg-dark bg-opacity-50 text-white'>
                <Row>
                    <Col md={{ span: 9 }}>
                        <Card.Title className="mb-1">{project.name}</Card.Title>
                    </Col>
                    <Col md={{ span: 3 }} className='d-flex justify-content-end pe-3'>
                        <ProjectBadgeRow project={project} projectBadgeClassName="mb-2" />
                    </Col>
                </Row>

                <div className='d-flex flex-column flex-grow-1 justify-content-between overflow-hidden'>
                    <Card.Text className="m-0" style={{ maxHeight: '85%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.description}</Card.Text>
                </div>
                
                <ProjectLinksRow className="mt-auto" project={project} />
            </Card.ImgOverlay>
        </motion.div>
    );
};

export default ProjectCardOverlay;