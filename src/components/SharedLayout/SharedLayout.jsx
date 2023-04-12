import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import HeaderNavigation from 'components/header/Header';
import Loader from '../loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
