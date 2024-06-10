"use client"
import { route_page_variant } from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import AboutMeRow from './components/AboutMeRow';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import SkillsGrid from './components/SkillsGrid';

/**
 * Represents a Container containing an introduction and the skills I possess
 * @returns {JSX.Element} A container displaying an `AboutMe` section and a `Skills` section
 */
const AboutPage = function () {
    return (
        <Container className="d-flex flex-column w-md-75 w-xs-100" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="Who Am I?">
                    <AboutMeRow />
                </ContentSection>
                <ContentSection section_title="What I Know">
                    <SkillsGrid />
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default AboutPage;