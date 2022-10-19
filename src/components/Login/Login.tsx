import React from 'react';
import LoginReduxForm, {IFormData} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/reduxStore";

interface IProps {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}


const Login = (props: IProps) => {
    const onSubmit = (formData: IFormData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
