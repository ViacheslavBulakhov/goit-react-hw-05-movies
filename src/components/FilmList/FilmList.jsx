import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ?? name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
