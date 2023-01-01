import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppStoreType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Error404} from "./components/common/Error404/Error404";


class App extends React.Component<PropsType> {
    catchAllUnHandlerErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnHandlerErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnHandlerErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='*' render={() => <Error404/>}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)