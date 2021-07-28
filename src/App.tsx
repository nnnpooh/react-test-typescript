import React from 'react';
import './App.css';
import Home from './Home';
import Render from './Render';

interface Info {
  number: number;
  filter: boolean;
  name: string;
}

function App() {
  const [info, setInfo] = React.useState<Info>({
    number: 0,
    filter: false,
    name: 'Nirand',
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    //console.dir(e.target);
    //setCounter((counter) => counter + 1);
    setInfo((current): Info => {
      return { ...current, number: current.number + 1 };
    });
    // setInfo({
    //   number: info.number + 1,
    //   filter: info.filter,
    //   name: info.name,
    // });
  };

  console.log(info);
  return (
    <div className='App'>
      <Home name='Nirand' />

      <button onClick={handleClick}>Click Me</button>
      <h3>{info.number}</h3>
      <p>{info.filter}</p>
      <p>{info.name}</p>
      <Render>
        <p>This is Render</p>
      </Render>
      <Render>
        {(c, setC) => (
          <p
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
              setC(c + 1);
            }}
          >
            {c}
          </p>
        )}
      </Render>
    </div>
  );
}

export default App;
