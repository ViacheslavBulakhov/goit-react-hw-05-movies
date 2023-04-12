import notFoundImage from 'images/notfoundDesc.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Link to="/">Go home page</Link>
      <div>
        <h2>We haven’t found this URl</h2>
        <img src={notFoundImage} alt="" />
      </div>
    </>
  );
}
