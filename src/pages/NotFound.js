import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../layouts';

function NotFound() {
   useEffect(() => {
      document.title = 'Mitrafor - NotFound';
   }, []);
   return (
      <>
         <LayoutMain>
            <div className="found">
               <h1>Page NotFound</h1>
               <Link to="/">back to home</Link>
            </div>
         </LayoutMain>
      </>
   );
}

export default NotFound;
