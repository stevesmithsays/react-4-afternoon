import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './main.css';
import App from './App';

ReactDOM.render(
    // wrap <HashRouter> around <App/>    
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));


