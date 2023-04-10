import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useParams } from 'react-router-dom';

const API_KEY = '663a9254ccdd905d0193e78c0f67091c';
export function FilmDetails() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setFilmDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [id]);

  return (
    <>
      <button>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`}
          alt={`${filmDetails.original_title}`}
        />
        <ul>
          <li>
            <h2>{filmDetails.original_title}</h2>
            <p>User score : {filmDetails.vote_average}%</p>
          </li>
          <li>
            <h3>overview</h3>
            <p>{filmDetails.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{filmDetails.genres?.map(({ name }) => `${name} `)}</p>
          </li>
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
}
