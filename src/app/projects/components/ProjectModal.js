"use client"
import styles from '../projects_page.module.css';

import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ProjectBadge from './ProjectBadge';
import ProjectLink from './ProjectLink';
import Row from 'react-bootstrap/Row';



/**
 * Represents a list of links and project types for a ProjectDescriptionModal element
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project 
 * @returns {JSX.Element} Returns Row element containing links and project 
 * types to place in ProjectDescriptionModal footer
 */
const ProjectModalFooterRow = function ({ project }) {
    const footer_row_elements = [];

    // Check if github link exists for project
    if (project.links.github) {
        footer_row_elements.push(
            <ProjectLink link_info={{
                link_type: "github",
                project_name: project.name,
                link: project.links.github
            }} />
        );
    }

    // Check if live demo link exists for project
    if (project.links.live_demo) {
        footer_row_elements.push(
            <ProjectLink link_info={{
                link_type: "live_demo",
                project_name: project.name,
                link: project.links.live_demo
            }}
                className={styles.project_link_icon} />
        );
    }

    // Add badges to footer row list
    project.badges.map(badge_type => (
        footer_row_elements.push(<ProjectBadge badge_type={badge_type} />)
    ))

    return (
        <Row>
            {
                footer_row_elements.map((element, i) => (
                    <Col key={i} className='p-0 my-auto'>
                        {element}
                    </Col>
                ))
            }
        </Row>
    );
};


/**
 * Represents the inside of a Modal.Body element for a project
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project 
 * @returns {JSX.Element} Returns an element containing the description and techonolgies
 * used for a particular project
 */
const ModalBodyContent = function ({ project }) {
    return (
        <>
            <h3 className='text-decoration-underline fw-bold'>Description</h3>
            <p className='fs-5 mb-4 text-body-secondary'>{project.description}</p>

            {/* Only add 'Technologies Used' section if field exists in project */}
            {project.technologies ?
                <>
                    <h3 className='text-decoration-underline fw-bold'>Technologies Used</h3>
                    <ul>
                        {
                            project.technologies.map((tech, i) => (
                                <li className="fs-5 text-body-secondary" key={i}>{tech}</li>
                            ))
                        }
                    </ul>
                </>
                : ""
            }
        </>
    );
};


/**
 * Represents an icon button that can be clicked to bring up a modal dialog
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project 
 * @returns {JSX.Element} Returns an icon button that when clicked creates a
 * modal for more information about a project
 */
const ProjectDescriptionModal = function ({ project }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Col className='p-0 pe-1'>
                <Image alt="alt" src="/icons/box-arrow-up-right.svg"
                    className={`${styles.project_link_icon} ${styles.modal_expand_icon}`} onClick={handleShow} />
            </Col>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton><Modal.Title className='fw-bold fs-2'>{project.name}</Modal.Title></Modal.Header>

                <Modal.Body className={styles.modal_body}>
                    <ModalBodyContent project={project} />
                </Modal.Body>

                <Modal.Footer className={`justify-content-start ${styles.modal_footer}`}>
                    <ProjectModalFooterRow project={project} />
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProjectDescriptionModal;