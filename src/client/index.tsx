import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { add } from './math.js';

add(1, 2);

render(<App />, document.getElementById('root'));