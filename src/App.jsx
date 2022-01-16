import React from 'react';
import { Route, Routes } from 'react-router';
import routes from './routes.js';
import Login from './pages/Login/Login.jsx';
import Main from './pages/Main/Main.jsx';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

const App = () => (
  <Routes>
    <Route element={<PrivateOutlet />}>
      <Route path={routes.root()} element={<Main />} />
    </Route>
    <Route path={routes.login()} element={<Login />} />
    <Route path={routes.signup()} element={<SignUp />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
