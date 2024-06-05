"use client"

import {
    route_page_variant,
    contact__page_content_section_variant,
    contact__page_column_variant
} from '@/constants/animationVariants';

import { contactInformation } from '@/constants/profileConstants';

import { motion } from 'framer-motion';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import SocialLinks from '@/components/SocialLinks';


/**
 * Represents a Form to submit comments or message me
 * @returns {JSX.Element} A Form element containing fields such as name, email, and comments
 */
const FormLayout = function () {
    return (
        <motion.div variants={contact__page_column_variant}>
            <Form>
                <Form.Group className='mb-3' controlId="formGroupName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Jotham Teshome" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="jothamteshome@gmail.com" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupTextarea">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" placeholder="Comments" />
                </Form.Group>
                <Form.Group className='mb-3 d-flex justify-content-end' controlId='formGroupSubmitButton'>
                    <Button as="input" type="submit" value="Submit" />
                </Form.Group>
            </Form>
        </motion.div>
    );
};


/**
 * Represents a stack containing information regarding 
 * where I am and how to get in contact with me
 * @returns {JSX.Element} A Stack element containing my email, location, and social links
 */
const ContactInfo = function () {
    return (
        <motion.div variants={contact__page_column_variant}>
            <Stack className="mt-3 text-start text-lg-end contact_info" gap={4}>
                <Stack className='flex-grow-0'>
                    <h2 className="fw-bold mb-0">Email</h2>
                    <h5 className="mb-0">{contactInformation.email}</h5>
                </Stack>
                <Stack className='flex-grow-0'>
                    <h2 className="fw-bold mb-0">Location</h2>
                    <h5 className="mb-0">{contactInformation.location}</h5>
                </Stack>
                <Stack className='flex-grow-0'>
                    <h2 className="fw-bold mb-0">Social</h2>
                    <SocialLinks />
                </Stack>
            </Stack>
        </motion.div>
    );
};


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
        <motion.div variants={contact__page_content_section_variant} className={add_display_classes}>
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
                <ContentSection section_title="How To Reach Me">

                    {/* Builds a row in correct order for animation when page is large */}
                    <ReachMeRow flex_row_reverse={true} display_classes={["d-none", "d-lg-block"]}>
                        <ContactInfo />
                        <FormLayout />
                    </ReachMeRow>


                    {/* Builds a row in correct order for animation when page is small */}
                    <ReachMeRow display_classes={["d-block", "d-lg-none"]}>
                        <FormLayout />
                        <ContactInfo />
                    </ReachMeRow>
                </ContentSection>
            </motion.div>
        </Container>
    );
};


export default ContactPage;