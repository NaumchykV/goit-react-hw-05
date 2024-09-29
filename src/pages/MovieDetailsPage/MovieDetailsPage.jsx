import { Suspense, useRef } from 'react';
import { Link, NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/movies');
  
    const [movie] = useHttp(fetchMovieById, movieId);
  
    if (!movie) return <h2>Loading...</h2>;
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    return (
      <div className={css.movie_details}>
        <Link className={css.goback} to={goBackRef.current}>Go back</Link>
        <h1>{movie.title}</h1>
       <img src={imageUrl} alt={movie.title} />
       <h3>Overview:</h3>
       <p className={css.overview_p}>{movie.overview}</p>
       <h3>Genres</h3>
       <ul>
         {movie.genres.map(genre => (
           <li key={genre.id}>{genre.name}</li>
         ))}
       </ul>
        <hr />
        <div className={css.links}>
          <NavLink className={css.cast} to='cast'>Cast</NavLink>
          <NavLink className={css.review} to='reviews'>Reviews</NavLink>
        </div>
        <Suspense fallback={<h2>Second suspense</h2>}>
          <Outlet />
        </Suspense>
      </div>
    );
  };
  export default MovieDetailsPage;