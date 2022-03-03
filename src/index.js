import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './scss/custom.scss';
import './index.scss';
import './App.scss';
import './Global.scss';
import './fonts.scss';
import Accommodations from './routes/accommodations';
import Layout from './Layout';
import Body from './Body';
import Events from './routes/events';
import Registry from './routes/registry';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="events" element={<Events />} />
        <Route path="accommodations" element={<Accommodations />} />
        <Route path="registry" element={<Registry />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
