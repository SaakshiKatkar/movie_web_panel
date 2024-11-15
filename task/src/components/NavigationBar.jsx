import React, { useState } from 'react';
import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="fs-5 bgimg sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" >MovieDb</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
              <Nav.Link as={Link} to="/top-rated">Top Rated</Nav.Link>
              <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"
              />
              <Button type="submit" variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
