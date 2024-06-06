"use client"

import { socialMediaLinks, importantFiles, icons } from "@/constants/profileConstants";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SocialMediaIcon from "@/components/SocialMediaIcon";

/**
 * Represents a row of social media icons that link to their respective sites
 * @returns A container object containing social media icon links
 */
const ContactSocialMediaRow = function () {
    return (
        <Container className="p-0" fluid="lg">
            <Row className="mx-0 p-0 justify-content-lg-end" xs="auto">
                {socialMediaLinks.map((link, i) =>
                    <a href={link.url} key={i} target="_blank" className="pe-2 pe-lg-0 ps-0 ps-lg-2">
                        <SocialMediaIcon link={link} />
                    </a>
                )}

                <a href={importantFiles.resume.src} className="pe-2 pe-lg-0 ps-0 ps-lg-2" download={importantFiles.resume.name}>
                    <SocialMediaIcon link={{ name: "Resume", url: null, icon: icons.file_pdf, bg_color: "#d86556" }} />
                </a>
            </Row>
        </Container>
    );
};

export default ContactSocialMediaRow;