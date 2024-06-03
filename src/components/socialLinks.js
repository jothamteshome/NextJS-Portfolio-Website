import { socialMediaLinks } from "@/constants/profileConstants";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

const SocialLinks = function () {
    return (
        <Container className="p-0" fluid>
            <Row xs="auto" className="justify-content-start justify-content-lg-end no-gutters">
                {socialMediaLinks.map((link, i) =>
                    <Col key={i}>
                        <Nav.Link href={link.url}>
                            <Image alt="" className="social-media-icon" src={link.icon} />
                        </Nav.Link>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default SocialLinks;