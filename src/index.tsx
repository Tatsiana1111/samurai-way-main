import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subscribe} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)