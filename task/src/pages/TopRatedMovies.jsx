import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import { Button } from 'react-bootstrap';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`);
      setMovies(response.data.results);
    };
    fetchTopRatedMovies();
  }, [page]);

  return (
    <div>
      <h2 className='fw-bold'>Top Rated Movies</h2>
      <MovieList movies={movies} />
      <div className="d-flex justify-content-center my-4">
        <Button variant="dark" onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Previous</Button>
        <span className="mx-3 fw-bold mt-2">Page {page}</span>
        <Button variant="dark" onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default TopRatedMovies;
