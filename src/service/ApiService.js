const API_KEY = '663a9254ccdd905d0193e78c0f67091c';
const mediaType = 'all';
const timeWindow = 'day';

export default function ApiServices({ value, type }) {
  switch (type) {
    case 'homePageUrl':
      return `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`;
    case 'filmDetailsPageUrl':
      return `https://api.themoviedb.org/3/movie/${value}?api_key=${API_KEY}`;

    case 'moviesUrl':
      return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;

    default:
      console.log('type undefined');
      break;
  }
}
