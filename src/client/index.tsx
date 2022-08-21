import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { add } from './math.js';
//@ts-ignore
import _ from 'lodash';
console.log(_.join(['a', 'b', 'c'], '***'));

add(1, 2);

render(<App />, document.getElementById('root'));