import { Suspense, useRef } from 'react';
import { Link, NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
// import axios from 'axios';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { useHttp } from '../../hooks/useHttp';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    // console.log(location);
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

// const options = {
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U'
//   }
// };

// function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
//     axios.get(url, options)
//       .then(response => setMovie(response.data))
//       .catch(err => console.error(err));
//   }, [movieId]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   if (!movie) return <div>Loading...</div>;

//   const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//   return (
//     <div>
//       <button onClick={handleGoBack}>Go back</button>
//       <h1>{movie.title}</h1>
//       <img src={imageUrl} alt={movie.title} />
//       <p>{movie.overview}</p>
//       <h3>Genres</h3>
//       <ul>
//         {movie.genres.map(genre => (
//           <li key={genre.id}>{genre.name}</li>
//         ))}
//       </ul>
//       <Routes>
//         <Route path="cast" element={<MovieCast />} />
//         <Route path="reviews" element={<MovieReviews />} />
//       </Routes>
//     </div>
//   );
// }

// export default MovieDetailsPage;
