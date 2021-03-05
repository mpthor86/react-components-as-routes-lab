import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => <div>
        <p>Director: {d.name}</p>
        Movies:
        {d.movies.map(m => <ul>{m}</ul>)}
      </div>)}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
