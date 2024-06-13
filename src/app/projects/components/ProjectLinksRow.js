import ProjectDescriptionModal from './ProjectModal';
import ProjectLink from './ProjectLink';
import Row from 'react-bootstrap/Row';


/**
 * Represents a row containing links to external sites related to project
 * @param {object} props - The props object
 * @param {object} props.project - An object containing information about a project
 * @param {string} props.className - A string identifying classes to pass to the row component
 * @returns {JSX.Element} A Row element containing links related to a project if they exist
 */
const ProjectLinksRow = function ({ project, className }) {
    // Store a list of project links associated with a given project
    const project_links = [];

    // Check if github link exists for project
    if (project.links.github) {
        project_links.push({ link_type: "github", project_name: project.name, link: project.links.github });
    }

    // Check if live demo link exists for project
    if (project.links.live_demo) {
        project_links.push({ link_type: "live_demo", project_name: project.name, link: project.links.live_demo })
    }


    return (
        <Row className={`w-100 mx-auto ${className}`} xs={1} sm={1} md="auto">
            {
                project_links.map((link, i) => (
                    <ProjectLink key={i} link_info={link} />
                ))
            }
            <ProjectDescriptionModal project={project} />
        </Row>
    );
};

export default ProjectLinksRow;