import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const CastList = ({ cast }) => (
  <Row>
    {cast.slice(0, 10).map(actor => (
      <Col key={actor.cast_id} xs={6} md={4} lg={3}>
        <Image src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} roundedCircle fluid />
        <p>{actor.name}</p>
      </Col>
    ))}
  </Row>
);

export default CastList;
