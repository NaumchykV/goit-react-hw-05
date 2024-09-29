// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { fetchMovieCast } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';
import css from "./MovieCast.module.css"

const MovieCast = () => {
    const { movieId } = useParams();
    // const location = useLocation();
    // console.log(location);
    // const goBackRef = useRef(location.state ?? '/movies');
  
    const [cast] = useHttp(fetchMovieCast, movieId);

    // const actorId = cast.actor.id
  
    if (!cast) return <h2>Loading...</h2>;
    // const actorImageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    return (
            <div>
              <h2>Cast</h2>
              <ul>
                {cast.map(actor => (
                  <li className={css.actor} key={actor.cast_id}>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                    {actor.name} as {actor.character}</li>
                ))}
              </ul>
            </div>
          );
  };

  export default MovieCast;

// const options = {
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U',
//     accept: 'application/json'
//   }
// };

// function MovieCast() {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
//     axios.get(url, options)
//       .then(response => setCast(response.data.cast))
//       .catch(err => console.error(err));
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Cast</h2>
//       <ul>
//         {cast.map(actor => (
//           <li key={actor.cast_id}>
//             <img src='{actor.profile_path}' alt={actor.name} />
//             {actor.name} as {actor.character}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieCast;
