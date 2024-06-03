"use client"
import Container from 'react-bootstrap/Container';
import ContentSection from '@/components/ContentSection';



/**
 * Represents a Container containing my previous job experience and education
 * @returns {JSX.Element} A container displaying an `Experiences` section and an `Education` section
 */
const ProjectsPage = function () {
    return (
        <Container className="d-flex flex-column w-75" fluid="lg">
            <ContentSection section_title="Machine Learning">
            </ContentSection>

            <ContentSection section_title="Web Applications">
            </ContentSection>
        </Container>
    );
};

export default ProjectsPage;