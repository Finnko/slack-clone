// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import i18n from 'i18next';
import resources from './locales/index.js';
import { initReactI18next } from 'react-i18next';
import App from './components/App/App';

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
}

const render = async () => {
  await init();

  const vdom = (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )

  ReactDOM.render(vdom, document.getElementById('chat'));
}

render();

