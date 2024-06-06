"use client"
import styles from '../experience_page.module.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


/**
 * Represents a card displaying information about an academic institution I have attended
 * @param {object} props - The props object
 * @param {object} props.education - Object containing information about my education 
 * @returns {JSX.Element} A card element to display my education
 */
const EducationCard = function ({ education }) {
    // Initialize coursework element to empty <p /> tag
    let coursework_element = <p />;

    // If education exists within `education` object, create list element
    if (education.coursework.length) {
        coursework_element = <li>
            <p className="fst-italic">
                <span className="fst-normal">Coursework: </span>
                {education.coursework.join(", ")}
            </p>
        </li>
    }

    return (
        <Card className="bg-body-secondary">
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col lg={4} className='d-flex justify-content-center align-items-center'>
                    <Card.Img className={styles.logo} variant="top" alt={`Logo for ${education.institution}`} src={education.logo} />
                </Col>
                <Col lg={8}>
                    <Card.Body>
                        <Card.Title className="fs-4 text-primary-emphasis">{education.institution}</Card.Title>
                        <Card.Subtitle className="fs-5">{`${education.start_date} - ${education.end_date}`}</Card.Subtitle>
                        <Card.Subtitle className='my-1 fs-5 fst-italic'>{education.degree_aquired} - GPA: {education.gpa}</Card.Subtitle>
                        <Card.Text as="ul">
                            {coursework_element}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default EducationCard;