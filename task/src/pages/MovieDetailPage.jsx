import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

const MovieDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDetail movieId={id} />
    </div>
  );
};

export default MovieDetailPage;
