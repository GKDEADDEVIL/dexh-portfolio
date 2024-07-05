// components/Profile.js
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const Info = styled.div`
  margin-left: 20px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.div`
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="/path/to/your/image.png" alt="Profile Picture" />
      <Info>
        <Label>Full name:</Label>
        <Value>Kalyan Gopalam</Value>
        <Label>Job title:</Label>
        <Value>Bug Bounty Hunter</Value>
        <Label>Email:</Label>
        <Value>kalyangopalam@gmail.com</Value>
        <Label>Phone:</Label>
        <Value>+916281531298</Value>
        <Label>Address:</Label>
        <Value>Bangalore</Value>
      </Info>
    </ProfileContainer>
  );
};

export default Profile;
