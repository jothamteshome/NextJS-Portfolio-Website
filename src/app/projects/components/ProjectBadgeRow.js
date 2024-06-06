"use client"
import Col from 'react-bootstrap/Col';
import ProjectBadge from './ProjectBadge';
import Row from 'react-bootstrap/Row';


/**
 * Represents the row of badges showing the type of the subject matter of the project e.g ("Web", "ML", ...)
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a give project
 * @param {string} props.className - A string to pass class stylings down to ProjectBadgeRow
 * @param {string} props.projectBadgeClassName - A string to pass classes down to ProjectBadge
 * @returns {JSX.Element} A row element containing multiple badges for the given project
 */
const ProjectBadgeRow = function ({ project, className, projectBadgeClassName }) {
    return (
        <Row className={`${className ? className : ""} ps-2`} xs="auto">
            {
                project.badges.map((badge_type, i) => (
                    <Col key={i} className='p-0'>
                        <ProjectBadge badge_type={badge_type}
                            className={projectBadgeClassName ? projectBadgeClassName : ""} />
                    </Col>
                ))

            }
        </Row>
    );

};

export default ProjectBadgeRow;