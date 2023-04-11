import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import notFoundImage from 'images/notFoundImage.png';
import { CastWrap, CastItemWrap } from './FilmCastWrap.styled';
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

  return (
    <CastWrap>
      {filmDetails.cast?.map(item => (
        <CastItemWrap key={item.id}>
          <img
            width={250}
            height={250}
            src={`${
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : notFoundImage
            }`}
            alt={item.name}
          />
          <div>
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </div>
        </CastItemWrap>
      ))}
      {filmDetails.cast?.length === 0 && (
        <h2>We don't have any cast for this movie</h2>
      )}
    </CastWrap>
  );
}
