import React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => {
  return (
    <>
      <p>404 Page</p>
      <p>
        <Link to="/">Return to Home Page</Link>
      </p>
    </>
  );
};

export default Page404;