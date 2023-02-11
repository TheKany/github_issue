import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/styles/base/_reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

dayjs.extend(relativeTime);
reportWebVitals();
