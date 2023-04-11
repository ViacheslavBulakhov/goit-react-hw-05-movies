import notFoundImage from 'images/notFoundImage.png';
import { BasicInforamtionWrap } from './BasicInformationWrap.styled';
import { NavLink } from 'react-router-dom';

export default function BasicInforamtion({ filmDetails, backLinkLocation }) {
  const image = filmDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`
    : notFoundImage;

  const userScore = Math.ceil(filmDetails.vote_average);

  return (
    <BasicInforamtionWrap>
      <NavLink to={backLinkLocation}>Go back</NavLink>
      <img src={image} alt={filmDetails.title} />

      <ul>
        <li>
          <h2>{filmDetails.original_title}</h2>
          <p>User score : {userScore}%</p>
        </li>
        <li>
          <h3>Overview</h3>
          <p>{filmDetails.overview}</p>
        </li>
        <li>
          <h3>Genres</h3>
          <p>{filmDetails.genres?.map(({ name }) => `${name} `)}</p>
        </li>
      </ul>
    </BasicInforamtionWrap>
  );
}
