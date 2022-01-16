import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import routes from '../../routes';

import './NotFound.scss';

const NotFound = () => (
  <MainLayout>
    <div className="text-center not-found">
      <span className="not-found-title">404</span>
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
        Но вы можете перейти
        {' '}
        <a href={routes.root()}>на главную страницу</a>
      </p>
    </div>
  </MainLayout>
);

export default NotFound;
