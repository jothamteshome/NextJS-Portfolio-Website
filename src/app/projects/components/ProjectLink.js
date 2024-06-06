"use client"
import styles from '../projects_page.module.css';


import { projectIcons } from '@/constants/profileConstants';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

/**
 * Represents an icon link to an external site
 * @param {object} props - The props object
 * @param {object} props.link_info - An object containng information about an external link 
 * @returns {JSX.Element} Returns a column containing an icon link to an external site
 */
const ProjectLink = function ({ link_info }) {
    // Take lowercase identifier of link type and use in image alt text
    let alt_text_link_type = link_info.link_type.split("_");
    alt_text_link_type = alt_text_link_type.map((word) => (word.charAt(0).toUpperCase() + word.substr(1))).join(" ")

    return (
        <Col className='p-0 pb-2 pe-md-1 pb-md-0 col-auto'>
            <a href={link_info.link}>
                <Image alt={`${alt_text_link_type} link for ${link_info.project_name}`}
                    src={projectIcons[link_info.link_type]}
                    className={styles.project_link_icon} />
            </a>
        </Col>
    );
};

export default ProjectLink;