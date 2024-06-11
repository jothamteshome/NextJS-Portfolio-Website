"use client"
import {
    route_page_variant,
    experience__page_card_list_variant,
    experience__page_card_variant
} from '@/constants/animationVariants';

import { experienceItems, educationItems } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import Row from 'react-bootstrap/Row';


/**
 * Represents a list of cards containing information specified by the list_items and ListCard parameters
 * @param {object} props - The props object
 * @param {Array.<Object>} props.list_items - Array containing objects containing information to display on a Card element
 * @param {JSX.Element} props.ListCard - Generic card placeholder for card element belonging to this list
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
        <Container className="d-flex flex-column w-md-75 w-xs-100" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="Education">
                    <ExperiencesPageCardList
                        list_items={educationItems}
                        ListCard={({ item }) => <EducationCard education={item} />} />
                </ContentSection>

                <ContentSection section_title="Experiences">
                    <ExperiencesPageCardList
                        list_items={experienceItems}
                        ListCard={({ item }) => <ExperienceCard experience={item} />} />
                </ContentSection>
            </motion.div>
        </Container>
    );
};

export default ExperiencesPage;