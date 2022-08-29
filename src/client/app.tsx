import React from 'react';
import './index.less';
import Father from './useImperativeHandle';

export default class App extends React.Component {
    render() {
        return <div>
            <div className='header'>222</div>
            <Father />
        </div>
    }
}
