"use client"

import { contact__page_column_variant } from '@/constants/animationVariants';

import { motion } from 'framer-motion';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


/**
 * Represents a field in the FeedbackForm element
 * @param {object} props - The props object
 * @param {object} props.field_data - An object containing information about a field to build 
 * @returns Returns a Form input element with specified type and floating label
 */
const FormField = function ({ field_data }) {
    return (
        <FloatingLabel className='mb-3' controlId={field_data.id} label={field_data.label}>
            <Form.Control type={field_data.type} placeholder={field_data.placeholder} required />
        </FloatingLabel>
    );
};


/**
 * Represents a Form to submit comments or message me
 * @returns {JSX.Element} A Form element containing fields such as name, email, and comments
 */
const FeedbackForm = function () {
    // Information about fields to create for form
    const form_fields = [
        { id: 'floatingName', label: 'Full Name', type: 'text', placeholder: "First Last" },
        { id: 'floatingEmail', label: 'Email Address', type: 'email', placeholder: "name@email.com" },
        { id: 'floatingComments', label: 'Comments?', type: 'textarea', placeholder: "Comments?" }
    ]

    return (
        <motion.div variants={contact__page_column_variant}>
            <Form>
                {form_fields.map((field, i) => (
                    <FormField key={i} field_data={field} />
                ))
                }
                <Form.Group className='mb-3 d-flex justify-content-end' controlId='formGroupSubmitButton'>
                    <Button as="input" type="submit" value="Submit" disabled />
                </Form.Group>
            </Form>
        </motion.div>
    );
};

export default FeedbackForm;
