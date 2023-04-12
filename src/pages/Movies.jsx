import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import axios from 'axios';
import Notiflix from 'notiflix';

import Searchbar from 'components/searchbar/Searchbar';
import Loader from '../components/loader/Loader';

const API_KEY = '663a9254ccdd905d0193e78c0f67091c';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);

  const [searchValue, setSearchValue] = useState(
    () => searchParams.get('query') ?? ''
  );

  const location = useLocation();

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    async function fetchTrendMovies() {
      setIsLoader(true);
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`;
        const response = await axios.get(url);

        if (response.data.results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        setFilms(response.data);
        setIsLoader(false);
      } catch (error) {
        setIsLoader(false);
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [searchValue]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchParams.get('query')) {
      Notiflix.Notify.warning(
        'Serach field is empty,please write something and try again.'
      );
    }
    setSearchValue(searchParams.get('query') ?? '');
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {isLoader && <Loader />}
      {films.results?.length > 0 && (
        <ul>
          {films.results?.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
