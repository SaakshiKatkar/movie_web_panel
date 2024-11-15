import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    const searchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}`);
      setMovies(response.data.results);
    };

    if (query) {
      searchMovies();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
