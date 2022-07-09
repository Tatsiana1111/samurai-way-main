import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
    {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
    {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
]
let dialogs = [
    {name: 'Tanya', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Vika', id: 3},
    {name: 'Dima', id: 4},
    {name: 'Alena', id: 5},
    {name: 'Nick', id: 5},
]
let messages = [
    {message: 'Hello', id: 1},
    {message: 'Where are you now??', id: 2},
    {message: 'Good of you, baby))', id: 3},
    {message: 'What the bloody hell is this???', id: 4},
    {message: 'Okay, thanks', id: 5},
    {message: 'Very well!', id: 5},
]

ReactDOM.render(
    <App dialogs={dialogs} posts={posts} messages={messages}/>,
    document.getElementById('root')
);