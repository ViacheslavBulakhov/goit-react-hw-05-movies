import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const API_KEY = '663a9254ccdd905d0193e78c0f67091c';

export default function FilmDetailsCast() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setFilmDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [id]);
  console.log(filmDetails.cast);
  return (
    <div>
      {filmDetails.cast?.map(item => (
        <div key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </div>
      ))}
      {filmDetails.cast?.length === 0 && <div>Something put there cast</div>}
    </div>
  );
}
