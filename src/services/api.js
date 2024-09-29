import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JkMzIxYzMzNjFlYWQxOWUwZjdmNjgxZGEyYTAxMSIsIm5iZiI6MTcyNzQzNjM3Ny4yMjc2MDQsInN1YiI6IjY2ZjY5NDczODU2MzNiZjkyMjk2NjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm3PBNEgEgjJPjtga1QotHBPaqIfwum0ZAzlJj4NG0U'
  }
};

export const fetchMovies = async () => {
  const { data } = await axios.get('discover/movie?language=en-US', options);
  return data.results;
};

export const fetchTrendMovies = async () => {
  const { data } = await axios.get('trending/movie/day?language=en-US', options);
  return data.results;
};

export const fetchMovieById = async movieId => {
    const { data } = await axios.get(`movie/${movieId}?language=en-US`, options);
    return data;
  };

  export const fetchMovieCast = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/credits?language=en-US`, options);
    return data.cast;
  };