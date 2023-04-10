import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const API_KEY = '663a9254ccdd905d0193e78c0f67091c';

export function Movies() {
  const [currentValue, setCurrentValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    async function fetchTrendMovies() {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchParams.get(
          'query'
        )}`;
        const response = await axios.get(url);
        setFilms(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (currentValue === '') {
      console.log('Write something pls');
      return;
    }
    setSearchParams({ query: currentValue });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={e => setCurrentValue(e.target.value.trim())}
          value={currentValue}
        />
      </form>

      {films.results?.length > 0 && (
        <ul>
          {films.results?.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
