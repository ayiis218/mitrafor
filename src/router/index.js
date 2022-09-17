import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Detail from '../pages/detail';
import NotFound from '../pages/NotFound';

const router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/">
               <Route index element={<Home />} />
            </Route>
            <Route path="/about">
               <Route index element={<About />} />
            </Route>
            <Route path="/detail/:id">
               <Route index element={<Detail />} />
            </Route>
            <Route path="/contact">
               <Route index element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default router;
