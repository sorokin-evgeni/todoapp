import ReactDOM from 'react-dom';
import React from 'react';
import 'antd/dist/antd.css';
import {App} from './components/App';
import {Todo} from './components/Todo';

ReactDOM.render(
    <App>
        <Todo/>
    </App>,
    document.getElementById('root'),
);
