import { useRef, useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import axios from 'axios';

import Loader from 'components/loader/Loader';
import AdditionalInformationWrap from 'components/filmDetails/additionalinformation/AdditionalInformation';
import BasicInforamtion from 'components/filmDetails/basicInformation/BasicInformation';
import ApiServices from 'service/ApiService';

export default function FilmDetails() {
  const [filmDetails, setFilmDetails] = useState(null);
  const { id } = useParams();

  const location = useLocation();

  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const response = await axios.get(
          ApiServices({ type: 'filmDetailsPageUrl', value: id })
        );
        setFilmDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, [id]);

  return (
    <>
      {filmDetails ? (
        <>
          <BasicInforamtion
            filmDetails={filmDetails}
            backLinkLocation={backLinkLocation.current}
          />
          <AdditionalInformationWrap />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <h1>No information about this film</h1>
      )}
    </>
  );
}
