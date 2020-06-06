import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename='/'>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);