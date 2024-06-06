"use client"
import {
    route_page_variant,
    contact__page_content_section_variant,
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
 * @param {Array.<string>} props.display_classes - The display class options to add to the motion.div element
 * @param {boolean} props.flex_row_reverse - Boolean value to determine whether to reverse row
 * @param {JSX.Element} props.children - Children elements of the current element 
 * @returns {JSX.Element} Row element containing contact information and form
 */
const ReachMeRow = function ({ display_classes, flex_row_reverse, children }) {
    // Add display classes if list is not empty
    const add_display_classes = display_classes ? display_classes.join(" ") : "";


    // Add flex-row-reverse if true
    const add_reverse = flex_row_reverse ? "flex-row-reverse" : "";


    return (
        <motion.div  className={add_display_classes}>
            <Row lg={2} md={1} sm={1} xs={1} className={`${add_reverse} justify-content-center align-items-center`}>
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
        <Container className="d-flex flex-column" fluid="lg">
            <motion.div
                variants={route_page_variant}
                initial="initial"
                animate="animate"
            >
                <ContentSection section_title="How To Reach Me" variants={contact__page_content_section_variant}>

                    {/* Builds a row in correct order for animation when page is large */}
                    <ReachMeRow flex_row_reverse={true} display_classes={["d-none", "d-lg-block"]}>
                        <ContactInfo />
                        <FeedbackForm />
                    </ReachMeRow>


                    {/* Builds a row in correct order for animation when page is small */}
                    <ReachMeRow display_classes={["d-block", "d-lg-none"]}>
                        <FeedbackForm />
                        <ContactInfo />
                    </ReachMeRow>
                </ContentSection>
            </motion.div>
        </Container>
    );
};


export default ContactPage;