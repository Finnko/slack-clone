import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Main = () => (
  <MainLayout>
    Главная
    <Link to="/login">Логин</Link>
  </MainLayout>
);

export default Main;
