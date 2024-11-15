import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CastList from './CastList';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      setMovie(response.data);
    };

    const fetchMovieCast = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      setCast(response.data.cast);
    };

    fetchMovieDetail();
    fetchMovieCast();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col md={4} className='mt-3'>
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} fluid />
        </Col>
        <Col md={8} className='mt-3'>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <h3>Cast</h3>
          <CastList cast={cast} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
