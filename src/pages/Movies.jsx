import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import Notiflix from 'notiflix';

import Searchbar from 'components/searchbar/Searchbar';
import Loader from '../components/loader/Loader';
import ApiServices from 'service/ApiService';
import { FilmList } from 'components/FilmList/FilmList';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);

  const [searchValue, setSearchValue] = useState(
    () => searchParams.get('query') ?? ''
  );

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    async function fetchTrendMovies() {
      setIsLoader(true);
      try {
        const response = await axios.get(
          ApiServices({ type: 'moviesUrl', value: searchValue })
        );

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
      {films.results?.length > 0 && <FilmList films={films.results} />}
    </>
  );
}
