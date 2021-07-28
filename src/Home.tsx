import React from 'react';

interface Props {
  name: string;
}

const Home: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>name</h1>
    </div>
  );
};

export default Home;
