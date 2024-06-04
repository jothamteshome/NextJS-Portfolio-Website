"use client"

import {
    route_page_variant,
    contact__page_content_section_variant,
    contact__page_form_variant,
    contact__page_contact_info_variant
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
        <motion.div variants={contact__page_form_variant}>
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
        <motion.div variants={contact__page_contact_info_variant}>
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
                    <motion.div variants={contact__page_content_section_variant}>
                        <Row lg={2} md={1} sm={1} xs={1} className="justify-content-center align-items-center">
                            <FormLayout />
                            <ContactInfo />
                        </Row>
                    </motion.div>
                </ContentSection>
            </motion.div>
        </Container>
    );
};


export default ContactPage;