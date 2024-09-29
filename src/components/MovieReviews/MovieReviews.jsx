import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieReviews.module.css'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U'
  }
};

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    axios.get(url, options)
      .then(response => setReviews(response.data.results))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p className={css.review_content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
