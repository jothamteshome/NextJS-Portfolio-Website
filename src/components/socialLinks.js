"use client"

import { socialMediaLinks } from "@/constants/profileConstants";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

/**
 * Represents an icon link to a social media site
 * @param {object} props - The props object
 * @param {object} props.link - An object containing information about my social media links 
 * @returns A div containing an icon that links to a given social media site
 */
const SocialMediaIcon = function ({ link }) {
    return (
        <div style={{backgroundColor: link.bg_color}} className="social-media-icon rounded-2">
            <Image alt={`Icon representing ${link.name} `} className="p-1 w-100" src={link.icon} />
        </div>
    );
};


/**
 * Represents a row of social media icons that link to their respective sites
 * @returns A container object containing social media icon links
 */
const SocialLinks = function () {
    return (
        <Container className="p-0" fluid="lg">
            <Row className="mx-0 p-0 justify-content-lg-end" xs="auto">
                {socialMediaLinks.map((link, i) =>
                    <a href={link.url} key={i} className="pe-2 pe-lg-0 ps-0 ps-lg-2">
                        <SocialMediaIcon link={link} />
                    </a>
                )}
            </Row>
        </Container>
    );
};

export default SocialLinks;