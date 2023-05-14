import React from 'react';
import './index.less';
import Father from './useImperativeHandle';
import Test from './useReducer';
import Forward from './forwardRef';
import { ATest1, ATest2 } from './hoc';
// import SuspenseDemo from './suspenseDemo';
import SuspensePacking from './suspensePacking';
import TestAsync from './useAsync';
import Index from './useIndex';
import CC from './classComponent';
import Dong from './dong';
import Ahooks from './ahooks';
import Boom from './boom';

// import  from 'monaco-editor';

export default class App extends React.Component {
    render() {
        return <div>
            <div className='header'>222</div>
            <div id='container'></div>
            {/* <Father />
            <Forward />
            <Test />
            <ATest1 />
            <ATest2 />
            <SuspensePacking /> */}
            {/* <MonacoEditor /> */}
            <div><TestAsync /></div>
            <div><Index /></div>
            <div><CC /></div>
            <div><Ahooks /></div>
            <div><Boom isShow /></div>
            {/* <div><Dong /></div> */}
        </div>
    }
}
