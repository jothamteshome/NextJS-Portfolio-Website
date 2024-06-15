import styles from '../projects_page.module.css';


/**
 * Represents the inside of a Modal.Body or Accordion.Body element for a project
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project 
 * @returns {JSX.Element} Returns an element containing the description and techonolgies
 * used for a particular project
 */
const BodyContent = function ({ project }) {
    return (
        <>
            <h3 className='text-decoration-underline fw-bold'>Description</h3>
            <p className={`fs-5 mb-4 text-body-secondary ${styles.body_description}`}>{project.description}</p>

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

export default BodyContent;