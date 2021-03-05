import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => <div>
        <p>Name: {a.name}</p>
        Movies:
        {a.movies.map(m => <ul>{m}</ul>)}
        </div>)}
      {/*{code here}*/}
    </div>
  );
};

export default Actors;
