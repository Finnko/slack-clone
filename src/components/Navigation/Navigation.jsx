import React from 'react';
import { Link } from 'react-router-dom';
import constructPath from '@src/routes';

const Navigation = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <Link to={constructPath.root()} className="navbar-brand">
        Hexlet Chat
      </Link>
    </div>
  </nav>
);

export default Navigation;
