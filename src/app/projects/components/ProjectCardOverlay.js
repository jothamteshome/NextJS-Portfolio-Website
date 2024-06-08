import { projects__page_project_card_overlay_variant } from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ProjectBadgeRow from './ProjectBadgeRow';
import ProjectLinksRow from './ProjectLinksRow';
import Stack from 'react-bootstrap/Stack';


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
            <Card.ImgOverlay className='bg-dark bg-opacity-50 text-white'>
                <Stack direction="horizontal" className='d-flex justify-content-between'>
                    <Card.Title className='mb-1'>{project.name}</Card.Title>
                    <ProjectBadgeRow project={project} projectBadgeClassName="mb-2" />
                </Stack>
                <Container className='h-100 p-0 pb-4 d-flex flex-column justify-content-between'>
                    <Card.Text className='text-wrap text-truncate'>{project.description}</Card.Text>
                    <ProjectLinksRow project={project} />
                </Container>
            </Card.ImgOverlay>
        </motion.div>
    );
};

export default ProjectCardOverlay;