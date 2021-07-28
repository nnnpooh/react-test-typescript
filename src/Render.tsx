import React, { ReactElement } from 'react';

interface Props {
  children?:
    | JSX.Element
    | ((
        counter: number,
        setCounter: React.Dispatch<React.SetStateAction<number>>
      ) => JSX.Element | null);
}

function Render({ children }: Props): ReactElement {
  const [counter, setCounter] = React.useState(10);
  return (
    <div style={{ color: 'red' }}>
      {children instanceof Function ? children(counter, setCounter) : children}
    </div>
  );
}

export default Render;
