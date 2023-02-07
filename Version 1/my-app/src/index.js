import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld title='Formularios' fecha="03/02/2023"/>
    </React.StrictMode>
)