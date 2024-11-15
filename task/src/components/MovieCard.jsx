import React from 'react';
import { Card, Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Container>
    <Row>
      <Col className="d-flex align-items-center justify-content-center  ">
        <Card style={{ width: "16rem"}}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Rating: {movie.vote_average}</Card.Text>
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">
              Details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default MovieCard;
