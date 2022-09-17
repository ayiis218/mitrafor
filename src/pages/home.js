import React, { useEffect } from 'react';
import HomePage from '../components/organisms/formHome';
import LayoutMain from '../layouts';

const Home = () => {
   useEffect(() => {
      document.title = 'Mitrafor - Home Page';
   }, []);
   return (
      <>
         <LayoutMain>
            <HomePage />
         </LayoutMain>
      </>
   );
};

export default Home;
