import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import css from './Homepage.module.css'

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U'
  }
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url, options)
      .then(response => setMovies(response.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={css.homepage}>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
