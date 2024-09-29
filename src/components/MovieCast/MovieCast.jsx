import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';
import css from "./MovieCast.module.css"

const MovieCast = () => {
    const { movieId } = useParams();
  
    const [cast] = useHttp(fetchMovieCast, movieId);
  
    if (!cast) return <h2>Loading...</h2>;
    
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