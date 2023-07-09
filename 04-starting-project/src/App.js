import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieshandler = useCallback(async () =>{
    setError(null);
    setIsLoading(true);
    try{
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
  
      const transformedMovies = data.results.map(el =>({
        id: el.episode_id,
        title: el.title,
        openingText: el.opening_crawl,
        releseDate: el.relese_date
      }));
      setMovies(transformedMovies);
    } catch (error){
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() =>{
    fetchMovieshandler();
  }, [fetchMovieshandler]);


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieshandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && movies.length >0 && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
