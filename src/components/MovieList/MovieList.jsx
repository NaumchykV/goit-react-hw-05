// import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { fetchTrendMovies } from '../../services/api';

// const MovieList = () => {
//     // const location = useLocation();
//     const [movies, setMovies] = useState([]);
//     // const [movies] = useHttp(fetchTrendMovies)
//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//               const moviesData = await fetchTrendMovies();
//               setMovies(moviesData);
//             } catch (error) {
//               console.error('Error fetching movies:', error);
//             }
//     };
// getMovies();
//     }, []);

// return (
//     <ul>
//        {movies.map(movie => (
//          <li key={movie.id}>
//            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//          </li>
//        ))}
//     </ul>
    
//     );
// };

// export default MovieList;

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
          <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
