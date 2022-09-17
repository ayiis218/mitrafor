import React, { useEffect } from 'react';
import ContactPage from '../components/organisms/formContact';
import LayoutMain from '../layouts';

const Contact = () => {
   useEffect(() => {
      document.title = 'Mitrafor - Contact Page';
   }, []);
   return (
      <>
         <LayoutMain>
            <ContactPage />
         </LayoutMain>
      </>
   );
};

export default Contact;
