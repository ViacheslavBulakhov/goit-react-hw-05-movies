import { useEffect, useState } from 'react';
import axios from 'axios';
import ApiServices from 'service/ApiService';
import { FilmList } from 'components/FilmList/FilmList';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const response = await axios.get(ApiServices({ type: 'homePageUrl' }));
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
      <FilmList films={films} />
    </>
  );
}
