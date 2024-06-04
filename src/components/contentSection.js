"use client"

import { content_section_variant } from "@/constants/animationVariants";
import { motion } from "framer-motion";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * Represents a row containing the title and contents for a given section
 * @param {object} props - The props object
 * @param {string} section_title - The title of the current section being built
 * @param {JSX.Element} children - The child element containing the section contents to render
 * @returns {JSX.Element} A Row element to display a section's title and contents
 */
const ContentSection = function ({ section_title, children, variants}) {
    // If custom animation variant is passed in, use that over the
    // base content section animation variant options
    const animation_variant = variants ? variants : content_section_variant

    return (
        <motion.div variants={animation_variant}>
            <Row className="w-100 mx-auto justify-content-center">
                <Col xs={12}>
                    <h1 className="fs-1 text-primary mt-5">{section_title}</h1>
                </Col>
                <Col className="mx-auto mt-2" xs={12} lg={11}>
                    {children}
                </Col>

            </Row>
        </motion.div>
    );
}

export default ContentSection;