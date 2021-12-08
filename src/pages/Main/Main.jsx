import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import { fetchChannels } from '../../store/channels/channelsSlice.js';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannels());
  }, []);

  return (
    <MainLayout>
      Главная
      <Link to="/login">Логин</Link>
    </MainLayout>
  );
};

export default Main;
