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
  background: rgba(0, 0, 0, 0.95);
  border-radius: 15px;
  color: #fff;
  font-family: "Comforter Brush", cursive;
`;

const Panel = styled.div`
  width: 14%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CommandList = styled.div`
  width: 50%;
  padding-top: 10px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const CommandItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 8px 0;
  &:hover {
    background: #131842;
    border-radius: 15px;
    transition-duration: 1.4s;
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
    Profile: <Profile />,
    Projects: <Projects />,
    Contact: <Contact />,
    About: <About />,
    Experience: <Experience />,
    Skills: <Skills />,
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
    }, 100); 
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
