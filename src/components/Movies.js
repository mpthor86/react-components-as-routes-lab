import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(m => <div><p>Title: {m.title}</p>
        <p>Time: {m.time}</p>
        Genres:
        {m.genres.map(g => <ul>{g}</ul>)}
        </div>)}
        {/*{code here}*/}
    </div>
  );
};

export default Movies;
