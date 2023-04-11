import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import AdditionalInformationWrap from 'components/filmDetails/additionalinformation/AdditionalInformation';
import BasicInforamtion from 'components/filmDetails/basicInformation/BasicInformation';

const API_KEY = '663a9254ccdd905d0193e78c0f67091c';

export function FilmDetails() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();

  const location = useLocation();

  const backLinkLocation = useRef(location.state?.from ?? '/movies');

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
      <BasicInforamtion
        filmDetails={filmDetails}
        backLinkLocation={backLinkLocation.current}
      />

      <AdditionalInformationWrap />

      <Outlet />
    </>
  );
}
