// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/index.js';
import App from './components/App/App.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { SocketIoProvider } from './contexts/SocketContext.jsx';
import store from './store';

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

const init = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        ru: resources.ru,
      },
      fallbackLng: 'ru',
    });
};

const render = async () => {
  await init();

  const vdom = (
    <React.StrictMode>
      <Provider store={store}>
        <SocketIoProvider>
          <AuthProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthProvider>
        </SocketIoProvider>
      </Provider>
    </React.StrictMode>
  );

  ReactDOM.render(vdom, document.getElementById('chat'));
};

render();
