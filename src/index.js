import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <div>
        <h1>Calculadora</h1>
        <Calculator />
        <footer>
            <h4>Copyright © 2019 | Fabinho Flauzino</h4>
        </footer>
    </div>    
, document.getElementById('root'));
serviceWorker.unregister();
