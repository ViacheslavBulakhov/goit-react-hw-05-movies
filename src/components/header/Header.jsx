import { NavLink } from 'react-router-dom';
import { NavigationBlock } from './Header.styled';

export default function HeaderNavigation() {
  return (
    <NavigationBlock>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </NavigationBlock>
  );
}
