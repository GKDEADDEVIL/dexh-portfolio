import styled from 'styled-components';

const ContactContainer = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;
 
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #444;
  background: #333;
  color: #fff;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #444;
  background: #333;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: #0f0;
  color: #000;
  cursor: pointer;

  &:hover {
    background: #0c0;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Form>
        <Label>Name:</Label>
        <Input type="text" name="name" />
        <Label>Email:</Label>
        <Input type="email" name="email" />
        <Label>Message:</Label>
        <TextArea name="message" rows="5"></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
