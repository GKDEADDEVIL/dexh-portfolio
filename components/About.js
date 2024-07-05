import styled from 'styled-components';

const AboutContainer = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <p>I am Kalyan Gopalam, a passionate Bug Bounty Hunter...</p>
      <p>My plans include advancing my skills in cybersecurity...</p>
    </AboutContainer>
  );
};

export default About;
