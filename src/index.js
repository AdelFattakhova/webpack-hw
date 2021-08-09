import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const sayHi = () => 'Hi, I\'m homework';

/* eslint-disable no-undef */
ReactDOM.render(<App sayHi={sayHi} />, document.getElementById('root'));
/* eslint-disable no-undef */

module.hot.accept();
