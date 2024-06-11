"use client"
import {
    route_page_variant,
    content_section_variant,
    content_row_variant,
} from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import Container from 'react-bootstrap/Container';
import ContactInfo from './components/ContactInfo.js';
import ContentSection from '@/components/ContentSection';
import FeedbackForm from "./components/FeedbackForm.js";
import Row from 'react-bootstrap/Row';


/**
 * Represents a row containing form element to send a message and my personal contact information
 * @param {object} props - The props object
 * @param {JSX.Element} props.children - Children elements of the current element 
 * @returns {JSX.Element} Row element containing contact information and form
 */
const ReachMeRow = function ({ children }) {
    return (
        <motion.div variants={content_row_variant}>
            <Row lg={2} md={1} sm={1} xs={1} className="justify-content-center align-items-center">
                {children}
            </Row>
        </motion.div>
    );
};


/**
 * Represents a Container containing my contact information and a form to send me a message
 * @returns {JSX.Element} A container displaying a `Contact` section
 */
const ContactPage = function () {
    return (
        <Container className="d-flex flex-column w-md-75 w-xs-100" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="How To Reach Me" variants={content_section_variant}>
                    <ReachMeRow>
                        <FeedbackForm />
                        <ContactInfo />
                    </ReachMeRow>
                </ContentSection>
            </motion.div>
        </Container>
    );
};


export default ContactPage;