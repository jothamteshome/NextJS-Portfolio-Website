"use client"
import styles from '../experience_page.module.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


/**
 * Represents a card displaying information about a position I have held
 * @param {object} props - The props object
 * @param {object} props.experience - Object containing information about a position I have held 
 * @returns {JSX.Element} A card element to display my past job experience
 */
const ExperienceCard = function ({ experience }) {
    return (
        <Card className="bg-body-secondary">
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col lg={4} className='d-flex justify-content-center align-items-center'>
                    <Card.Img className={styles.logo} variant="top" alt={`Logo for ${experience.employer}`} src={experience.logo} />
                </Col>
                <Col lg={8}>
                    <Card.Body>
                        <Card.Title className="fs-4 text-primary-emphasis">{experience.employer}</Card.Title>
                        <Card.Subtitle className="fs-5">{`${experience.start_date} - ${experience.end_date}`}</Card.Subtitle>
                        <Card.Subtitle className='my-1 fs-5 fst-italic'>{experience.role}</Card.Subtitle>
                        <Card.Text as="ul">
                            {
                                experience.tasks_completed.map((task, i) => (
                                    <li key={i}>
                                        <p>{task}</p>
                                    </li>
                                ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default ExperienceCard;