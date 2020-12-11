import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { DayDrinking } from "./components/DayDrinking.js";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <DayDrinking />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
