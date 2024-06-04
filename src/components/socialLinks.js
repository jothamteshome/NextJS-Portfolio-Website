import { socialMediaLinks } from "@/constants/profileConstants";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const SocialLinks = function () {
    return (
        <Container className="p-0" fluid="lg">
            <Row className="mx-0 p-0 justify-content-lg-end" xs="auto">
                {socialMediaLinks.map((link, i) =>
                    <a href={link.url} key={i} className="pe-2 pe-lg-0 ps-0 ps-lg-2">
                        <Image alt={`Icon representing ${link.name} `} className="social-media-icon currentColor" src={link.icon} />
                    </a>
                )}
            </Row>
        </Container>
    );
};

export default SocialLinks;