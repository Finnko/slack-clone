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

// const init = async () => {
//   await i18n
//     .use(initReactI18next)
//     .init({
//       resources: {
//         ru: resources.ru,
//       },
//       fallbackLng: 'ru',
//     });
//
//   return (
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }
//
//
// // const vdom = init();
//
ReactDOM.render(<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>, document.getElementById('chat'));
