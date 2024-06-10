"use client"
import {
    route_page_variant,
    projects__page_card_list_variant,
} from '@/constants/animationVariants';

import { projectItems } from '@/constants/profileConstants';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import ProjectCard from './components/ProjectCard';
import Row from 'react-bootstrap/Row';

/**
 * Represents a list containing multiple project cards
 * @returns {JSX.Element} A row containing multiple descriptive project cards
 */
const ProjectCardList = function () {
    return (
        <motion.div variants={projects__page_card_list_variant}
            initial="initial"
            animate="animate">
            <Row xl={3} lg={2} xs={1} className='gy-4'>
                {
                    projectItems.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))
                }
            </Row>
        </motion.div>
    );
}


/**
 * Represents a Container containing my previous job experience and education
 * @returns {JSX.Element} A container displaying an `Experiences` section and an `Education` section
 */
const ProjectsPage = function () {
    return (
        <Container className="d-flex flex-column w-md-75 w-xs-100" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="What I've Worked On">
                    <ProjectCardList />
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default ProjectsPage;