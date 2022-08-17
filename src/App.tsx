import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {
    ActionsTypes,
    RootStateType
} from "./redux/store";
import {store} from "./redux/reduxStore";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs dispatch={props.dispatch} stateDialogs={props.state.dialogsPage}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile store={store} statePosts={props.state.profilePage}
                                                  dispatch={props.dispatch}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
