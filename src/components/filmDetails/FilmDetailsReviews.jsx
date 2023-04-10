import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const API_KEY = '663a9254ccdd905d0193e78c0f67091c';

export default function FilmDetailsReviews() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setFilmDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [id]);

  return (
    <div>
      {filmDetails.results?.map(item => (
        <div key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.created_at}</p>
          <p>{item.content}</p>
        </div>
      ))}
      {filmDetails.results?.length === 0 && <div>Something put there</div>}
    </div>
  );
}
