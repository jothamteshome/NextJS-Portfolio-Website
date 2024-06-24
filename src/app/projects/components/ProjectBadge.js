import { projectBadgeDetails } from '@/constants/profileConstants';


/**
 * Represents a badge icon denoting the type of project
 * @param {object} props - The props object
 * @param {string} props.badge_type - A string denoting the type of badge to create
 * @param {string} props.className - A string to pass class stylings down to child 
 * @returns {JSX.Element} Returns a Badge element with its text and coloring modified for a specific badge_type
 */
const ProjectBadge = function ({ badge_type, className }) {

    // Retreive the badge styling details for the current project type
    const badge_details = projectBadgeDetails[badge_type];

    return (
        // Override the text and background color of the badge
        <span style={{
            color: `${badge_details.txt_color}`,
            backgroundColor: `${badge_details.bg_color}`
        }} className={`${className ? className : ""} me-1 badge`} title={badge_details.title}>
            {badge_type}
        </span>
    );
};

export default ProjectBadge;