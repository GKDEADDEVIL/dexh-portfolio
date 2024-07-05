// pages/index.js
import { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
`;

const Panel = styled.div`
  width: 20%;
  padding: 20px;
  background: #111;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CommandList = styled.div`
  width: 100%;
  padding-top: 10px;
`;

const CommandItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 5px 0;
  &:hover {
    background: #222;
  }
`;

const ClearButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: #f00;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #c00;
  }
`;

const Terminal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`;

const History = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const InputArea = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Prompt = styled.span`
  color: #0f0;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
`;

export default function Home() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');

  const commands = {
    profile: <Profile />,
    projects: <Projects />,
    contact: <Contact />,
    about: <About />,
    exp: <Experience />,
    skills: <Skills />,
    clear: () => setHistory([]),  // Clear command
  };

  const handleInput = e => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const executeCommand = command => {
    const response = commands[command] || 'Command not found';
    if (typeof response === 'function') {
      response();
    } else {
      setHistory([...history, { command, response }]);
    }
    setInput('');
  };

  const handleCommandClick = command => {
    setInput(command);
    setTimeout(() => {
      executeCommand(command);
    }, 100); // Slight delay to simulate typing effect
  };

  const handleClearClick = () => {
    executeCommand('clear');
  };

  return (
    <Container>
      <Panel>
        <h3>Commands:</h3>
        <CommandList>
          {Object.keys(commands).map(cmd => (
            <CommandItem key={cmd} onClick={() => handleCommandClick(cmd)}>
              {cmd}
            </CommandItem>
          ))}
        </CommandList>
        <ClearButton onClick={handleClearClick}>Clear</ClearButton>
      </Panel>
      <Terminal>
        <InputArea>
          <Prompt>Kalyan@Dex:~$ </Prompt>
          <Input value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleInput} />
        </InputArea>
        <History>
          {history.map((entry, index) => (
            <div key={index}>
              <div> {entry.command}</div>
              <div>{entry.response}</div>
            </div>
          ))}
        </History>
      </Terminal>
    </Container>
  );
}
