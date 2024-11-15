import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = (category, page = 1) => {
  return axios.get(`${BASE_URL}/movie/${category}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });
};

const fetchMovieDetail = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
};

const fetchMovieCast = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
};

const searchMovies = (query, page = 1) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page,
    },
  });
};

export {
  fetchMovies,
  fetchMovieDetail,
  fetchMovieCast,
  searchMovies,
};
