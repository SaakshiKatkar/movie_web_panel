import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import PopularMovies from './pages/PopularMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchPage from './pages/SearchPage';

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<PopularMovies />} />
      <Route path="/popular" element={<PopularMovies />} />
      <Route path="/top-rated" element={<TopRatedMovies />} />
      <Route path="/upcoming" element={<UpcomingMovies />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>
);

export default App;
