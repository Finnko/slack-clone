import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import routes from '../../routes';
import { useAuth } from '../../contexts/AuthContext.jsx';

const Navigation = () => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to={routes.root()} className="navbar-brand">
          {t('title')}
        </Link>
        {isAuth && (
          <Button variant="primary">{t('ui.button.logout')}</Button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
