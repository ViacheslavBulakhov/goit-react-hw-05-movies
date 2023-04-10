import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import { FilmDetails } from 'pages/FilmDetails';
import FilmDetailsReviews from './filmDetails/FilmDetailsReviews';
import FilmDetailsCast from './filmDetails/FilmDetailsCast';
import { Movies } from 'pages/Movies';

//import NotFound from '../pages/header/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="reviews" element={<FilmDetailsReviews />} />
          <Route path="cast" element={<FilmDetailsCast />} />
        </Route>
      </Route>
    </Routes>
  );
};
