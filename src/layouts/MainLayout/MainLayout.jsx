import React from 'react';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Modal from '../../components/modals/Modal.jsx';

const MainLayout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <Navigation />
    {children}
    <Modal />
  </div>
);

export default MainLayout;
