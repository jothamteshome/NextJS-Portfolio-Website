"use client"
import { contact__page_column_variant } from '@/constants/animationVariants';

import { contactInformation } from '@/constants/profileConstants';

import { motion } from 'framer-motion';

import ContactSocialMediaRow from './ContactSocialMediaRow';
import Stack from 'react-bootstrap/Stack';


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
                    <ContactSocialMediaRow />
                </Stack>
            </Stack>
        </motion.div>
    );
};

export default ContactInfo;