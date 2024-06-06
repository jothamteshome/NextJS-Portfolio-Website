"use client"
import styles from '../projects_page.module.css';

import {
    projects__page_project_card_variant,
    projects_page_project_card_entrance_variant
} from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProjectCardAccordion from './ProjectCardAccordion';
import ProjectCardOverlay from './ProjectCardOverlay';

/**
 * Represents a project card with a description that displays on hover when
 * page is large and in an accordion when pages are small
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a given project
 * @returns {JSX.Element} A column element to display a project and its description
 */
const ProjectCard = function ({ project }) {
    return (
        <motion.div variants={projects_page_project_card_entrance_variant}>
            <Col className={styles.project_card}>
                <motion.div variants={projects__page_project_card_variant}
                    initial="initial"
                    animate="initial"
                    whileHover="hover">
                    <Card className="ratio ratio-16x9 h-100 w-100 overflow-hidden">
                        <Card.Img alt={`Image of ${project.name}`} src={project.image}
                            className='w-100 h-100 object-fit-cover' />
                        <ProjectCardOverlay project={project} />
                    </Card>

                    <ProjectCardAccordion project={project} />
                </motion.div>
            </Col>
        </motion.div>
    );
};

export default ProjectCard;