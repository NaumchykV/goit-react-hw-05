import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U'
  }
};

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
   const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      handleSearch();
    }
     }, []);

    const handleSearch = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`;
    try {
      const response = await axios.get(url, options);
      setMovies(response.data.results);
    } catch (err) {
      console.error(err);
    }
    setSearchParams({ query });
  }, [query, setSearchParams]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
   };

   return (
    <div className={css.moviespage}>
      <h1>Search Movies</h1>
      <div className={css.search_wrap}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button className={css.button} onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};


export default MoviesPage;
