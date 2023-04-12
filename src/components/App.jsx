import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const FilmDetails = lazy(() => import('../pages/FilmDetails'));

const FilmDetailsReviews = lazy(() =>
  import('./filmDetails/reviews/FilmDetailsReviews')
);
const FilmDetailsCast = lazy(() =>
  import('./filmDetails/cast/FilmDetailsCast')
);

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
