import HeaderNavigation from 'components/header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
