"use client"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/contentSection';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import SocialLinks from '@/components/socialLinks';


const FormLayout = function () {
    return (
        <Col>
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
        </Col>
    );
};


const ContactInfo = function () {
    return (
        <Stack className="mt-3 text-start text-lg-end contact_info" gap={4}>
            <Stack className='flex-grow-0'>
                <h2 className="fw-bold mb-0">Email</h2>
                <h5 className="mb-0">jothamteshome@gmail.com</h5>
            </Stack>
            <Stack className='flex-grow-0'>
                <h2 className="fw-bold mb-0">Location</h2>
                <h5 className="mb-0">East Lansing, Michigan</h5>
            </Stack>
            <Stack className='flex-grow-0'>
                <h2 className="fw-bold mb-0">Social</h2>
                <SocialLinks />
            </Stack>
        </Stack>
    );
};


const ContactPage = function () {
    return (
        <Container className="d-flex flex-column" fluid="lg">
            <ContentSection section_title="How To Reach Me">
                <Row lg={2} md={1} sm={1} xs={1}>
                    <FormLayout />
                    <ContactInfo />
                </Row>
            </ContentSection>
        </Container>
    );
};


export default ContactPage;