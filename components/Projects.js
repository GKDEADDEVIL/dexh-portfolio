// components/Projects.js
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const Project = styled.div`
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ProjectLink = styled.a`
  color: #0f0;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectLink href="https://github.com/yourusername/project1">GitHub Link</ProjectLink>
      </Project>
      <Project>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectLink href="https://github.com/yourusername/project2">GitHub Link</ProjectLink>
      </Project>
    </ProjectsContainer>
  );
};

export default Projects;
