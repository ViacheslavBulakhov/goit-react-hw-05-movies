import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '663a9254ccdd905d0193e78c0f67091c';
const mediaType = 'all';
const timeWindow = 'day';

export default function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setFilms(film => [...film, ...response.data.results]);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
