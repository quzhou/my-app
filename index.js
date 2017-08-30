import React from 'react';
import ReactDOM from 'react-dom';
import { MyApp } from './App';

import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <MyApp activeTab={4} />,
  document.getElementById('root')
);
