import styled from 'styled-components';

const SkillsContainer = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const Skill = styled.div`
  margin-bottom: 10px;
`;
 
const Skills = () => {
  return (
    <SkillsContainer>
      <Skill>JavaScript</Skill>
      <Skill>Python</Skill>
      <Skill>Bug Bounty Hunting</Skill>
      {/* Add more skills as needed */}
    </SkillsContainer>
  );
};

export default Skills;
