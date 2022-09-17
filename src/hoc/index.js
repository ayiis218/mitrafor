import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const wrapped = (WrappedComponent) => (props) => {
   const navigate = useNavigate();
   const params = useParams();

   return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

export default wrapped;
