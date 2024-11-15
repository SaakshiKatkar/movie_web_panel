import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <Row>
    {movies.map(movie => (
      <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-4">
        <MovieCard movie={movie} />
      </Col>
    ))}
  </Row>
);

export default MovieList;
