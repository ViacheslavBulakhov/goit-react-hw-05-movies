import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import { FilmDetails } from 'pages/FilmDetails';
import FilmDetailsReviews from './filmDetails/reviews/FilmDetailsReviews';
import FilmDetailsCast from './filmDetails/cast/FilmDetailsCast';
import { Movies } from 'pages/Movies';
import NotFound from './NotFound/NotFound';

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
