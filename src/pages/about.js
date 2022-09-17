import React, { useEffect } from 'react';
import AboutPage from '../components/organisms/formAbout';
import LayoutMain from '../layouts';

const About = () => {
   useEffect(() => {
      document.title = 'Mitrafor - About Page';
   }, []);
   return (
      <>
         <LayoutMain>
            <AboutPage />;
         </LayoutMain>
      </>
   );
};

export default About;
