import react from 'react';
import reactDOM from 'react-dom';
import Card from './components/card.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Count from './components/inceament/count.jsx';
import Detail from './components/Hover/hover_Q.jsx';
import "index.css";
import App from "./App";
import { store } from './app/store';
import { provider } from 'react-redux';
reactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

    , document.getElementById("root")); 